import { endOfDayFormatted, startOfDayFormatted } from '@/lib/utils';
import { endOfToday, startOfToday, subDays } from 'date-fns';
import { useListPlayers } from '@/hooks/use-players';
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface IHeaderContextProps {
  players: {
    value: string;
    label: string;
    createdAt: string;
  }[];
  arePlayersLoading: boolean;
  periods: {
    value: string;
    label: string;
    startOfTheDay: string;
    endOfTheDay: string;
  }[];
  selectedPlayer: { value: string; label: string };
  setSelectedPlayer: Dispatch<
    SetStateAction<{ value: string; label: string; createdAt: string }>
  >;
  selectedPeriod: {
    value: string;
    startOfTheDay: string;
    endOfTheDay: string;
    label: string;
  };
  setSelectedPeriod: Dispatch<
    SetStateAction<{
      value: string;
      startOfTheDay: string;
      endOfTheDay: string;
      label: string;
    }>
  >;
}

export const HeaderContext = createContext({} as IHeaderContextProps);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const { players: playersData, arePlayersLoading } = useListPlayers();

  // TODO usar o formato retornado da api
  const players =
    playersData?.map((player) => ({
      value: player.id,
      label: player.name,
      createdAt: player.createdAt,
    })) ?? [];

  const [selectedPlayer, setSelectedPlayer] = useState({
    value: '',
    label: '',
    createdAt: '',
  });

  useEffect(() => {
    if (players.length > 0 && !selectedPlayer.value) {
      setSelectedPlayer(players[0]);
    }
  }, [players, selectedPlayer.value]);

  const periods = [
    {
      value: 'today',
      startOfTheDay: startOfDayFormatted(startOfToday()),
      endOfTheDay: endOfDayFormatted(endOfToday()),
      label: 'Hoje',
    },
    {
      value: 'last7days',
      startOfTheDay: startOfDayFormatted(subDays(startOfToday(), 7)),
      endOfTheDay: endOfDayFormatted(endOfToday()),
      label: 'Últimos 7 dias',
    },
    {
      value: 'last30days',
      startOfTheDay: startOfDayFormatted(subDays(startOfToday(), 30)),
      endOfTheDay: endOfDayFormatted(endOfToday()),
      label: 'Últimos 30 dias',
    },
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

  return (
    <HeaderContext.Provider
      value={{
        selectedPeriod,
        selectedPlayer,
        setSelectedPeriod,
        setSelectedPlayer,
        periods,
        players,
        arePlayersLoading,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
