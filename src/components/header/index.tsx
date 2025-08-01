import { CalendarIcon, Play } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '../ui/theme-toggle';
import { HeaderSelect } from './header-select';
import { useHeader } from '@/hooks/use-header';

export function Header() {
  const {
    // selectedCompany,
    selectedPeriod,
    selectedPlayer,
    // setSelectedCompany,
    setSelectedPeriod,
    setSelectedPlayer,
    // companies,
    periods,
    players,
  } = useHeader();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger className="h-8 w-8" />

        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-muted-foreground">Filtros Globais:</span>
        </div>

        <div className="flex items-center gap-3">
          {/* <HeaderSelect
            Icon={Building2}
            value={selectedCompany.value}
            onValueChange={(value) => {
              const company = companies.find((c) => c.value === value);
              if (company) setSelectedCompany(company);
            }}
            item={companies}
          /> */}

          <HeaderSelect
            className="w-[180px]"
            Icon={Play}
            value={selectedPlayer.value}
            onValueChange={(value) => {
              const player = players.find((p) => p.value === value);
              if (player) setSelectedPlayer(player);
            }}
            item={players}
          />

          <HeaderSelect
            Icon={CalendarIcon}
            value={selectedPeriod.value}
            onValueChange={(value) => {
              const period = periods.find((p) => p.value === value);
              if (period) setSelectedPeriod(period);
            }}
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
