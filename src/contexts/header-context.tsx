import { endOfDayFormatted, startOfDayFormatted } from '@/lib/utils';
import { endOfToday, startOfToday, subDays } from 'date-fns';
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface IHeaderContextProps {
  players: {
    value: string;
    label: string;
    createdAt: string;
  }[];
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

const players = [
  {
    value: '687e6b0509d90c4d947bcf81',
    label: 'Cognify-VSL2 Lead1',
    createdAt: '2025-07-22 00:00:00',
  },
  {
    value: '6884056e5e710078faed8565',
    label: 'GlycoGuard-VSL4 Lead1',
    createdAt: '2025-07-25 00:00:00',
  },
  {
    value: '688405355085f959648ed904',
    label: 'AlphaTurbo VSL2 Lead2',
    createdAt: '2025-07-25 00:00:00',
  },
];

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const periods = [
    {
      value: 'all-time',
      startOfTheDay: startOfDayFormatted(selectedPlayer.createdAt),
      endOfTheDay: endOfDayFormatted(endOfToday()),
      label: 'Todo o período',
    },
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
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
