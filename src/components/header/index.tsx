import { useState } from 'react';
import { CalendarIcon, Building2, Play } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '../ui/theme-toggle';
import { HeaderSelect } from './header-select';

export function Header() {
  const [selectedCompany, setSelectedCompany] = useState('bravo-corp');
  const [selectedPlayer, setSelectedPlayer] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const companies = [
    { value: 'bravo-corp', label: 'Bravo Corp' },
    { value: 'tech-solutions', label: 'Tech Solutions' },
    { value: 'digital-media', label: 'Digital Media' },
  ];

  const players = [
    { value: 'all', label: 'Todos os Players' },
    { value: 'player-1', label: 'Player Principal' },
    { value: 'player-2', label: 'Player Secundário' },
    { value: 'player-3', label: 'Player Mobile' },
  ];

  const periods = [
    { value: '7d', label: 'Últimos 7 dias' },
    { value: '30d', label: 'Últimos 30 dias' },
    { value: '90d', label: 'Últimos 90 dias' },
    { value: '1y', label: 'Último ano' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger className="h-8 w-8" />

        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-muted-foreground">Filtros Globais:</span>
        </div>

        <div className="flex items-center gap-3">
          <HeaderSelect
            Icon={Building2}
            value={selectedCompany}
            onValueChange={setSelectedCompany}
            item={companies}
          />

          <HeaderSelect
            Icon={Play}
            value={selectedPlayer}
            onValueChange={setSelectedPlayer}
            item={players}
          />

          <HeaderSelect
            Icon={CalendarIcon}
            value={selectedPeriod}
            onValueChange={setSelectedPeriod}
            item={periods}
          />
        </div>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
