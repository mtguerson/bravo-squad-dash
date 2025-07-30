import { createContext, useState } from 'react';

interface IHeaderContextProps {
  companies: {
    value: string;
    label: string;
  }[];
  players: {
    value: string;
    label: string;
  }[];
  periods: {
    value: string;
    label: string;
  }[];
  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
  selectedPlayer: string;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<string>>;
  selectedPeriod: string;
  setSelectedPeriod: React.Dispatch<React.SetStateAction<string>>;
}

export const HeaderContext = createContext({} as IHeaderContextProps);

const companies = [
  { value: 'bravo-facebook', label: 'Bravo Facebook' },
  { value: 'bravo-youtube', label: 'Bravo Youtube' },
  { value: 'bravo-native', label: 'Bravo Native' },
];

const players = [
  { value: 'cognify-vsl2', label: 'Cognify-VSL2' },
  { value: 'player-2', label: 'Player Secundário' },
  { value: 'player-3', label: 'Player Mobile' },
];

const periods = [
  { value: 'today', label: 'Hoje' },
  { value: '7d', label: 'Últimos 7 dias' },
  { value: '30d', label: 'Últimos 30 dias' },
  { value: '90d', label: 'Últimos 90 dias' },
];

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState(companies[0].value);
  const [selectedPlayer, setSelectedPlayer] = useState(players[0].value);
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0].value);

  return (
    <HeaderContext.Provider
      value={{
        selectedCompany,
        selectedPeriod,
        selectedPlayer,
        setSelectedCompany,
        setSelectedPeriod,
        setSelectedPlayer,
        companies,
        periods,
        players,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
