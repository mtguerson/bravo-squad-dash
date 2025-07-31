import { endOfDayFormatted, startOfDayFormatted } from '@/lib/utils';
import { endOfToday, startOfToday, subDays } from 'date-fns';
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface IHeaderContextProps {
  // companies: {
  //   value: string;
  //   label: string;
  // }[];
  players: {
    value: string;
    label: string;
  }[];
  periods: {
    value: string;
    label: string;
    startOfTheDay: string;
    endOfTheDay: string;
  }[];
  // selectedCompany: { value: string; label: string };
  // setSelectedCompany: Dispatch<
  //   SetStateAction<{ value: string; label: string }>
  // >;
  selectedPlayer: { value: string; label: string };
  setSelectedPlayer: Dispatch<SetStateAction<{ value: string; label: string }>>;
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

// TODO add database

// const companies = [
//   { value: 'bravo-facebook', label: 'Bravo Facebook' },
//   { value: 'bravo-youtube', label: 'Bravo Youtube' },
//   { value: 'bravo-native', label: 'Bravo Native' },
// ];

const players = [
  { value: '687e6b0509d90c4d947bcf81', label: 'Cognify-VSL2 Lead1' },
  { value: '6884056e5e710078faed8565', label: 'GlycoGuard-VSL4 Lead1' },
  { value: '688405355085f959648ed904', label: 'AlphaTurbo VSL2 Lead2' },
];

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

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  // const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

  return (
    <HeaderContext.Provider
      value={{
        // selectedCompany,
        selectedPeriod,
        selectedPlayer,
        // setSelectedCompany,
        setSelectedPeriod,
        setSelectedPlayer,
        // companies,
        periods,
        players,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
