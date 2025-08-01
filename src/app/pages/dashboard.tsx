import { Target, TrendingUp, Users, Play, Clock, Zap } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/metric-card';
import { LineChartComponent } from '@/components/charts/line-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { Skeleton } from '@/components/ui/skeleton';
import { useHeader } from '@/hooks/use-header';
import { useAllStats, useAllStatsByDay } from '@/hooks/use-all-stats';
import { endOfDayFormatted, startOfDayFormatted } from '@/lib/utils';
import { endOfToday, startOfToday, subDays } from 'date-fns';

export function Dashboard() {
  const { selectedPlayer, selectedPeriod } = useHeader();

  const { allStats, areAllStatsLoading } = useAllStats({
    playerId: selectedPlayer.value,
    startDate: selectedPeriod.startOfTheDay,
    endDate: selectedPeriod.endOfTheDay,
  });

  const { allStatsByDay, areAllStatsByDayStatsLoading } = useAllStatsByDay({
    playerId: selectedPlayer.value,
    startDate: startOfDayFormatted(subDays(startOfToday(), 7)),
    endDate: endOfDayFormatted(endOfToday()),
  });

  const conversionsPerDay = allStatsByDay?.map(
    ({ date_key, total_conversions }) => ({ date_key, total_conversions })
  );

  const conversionsPerDayFiltered = conversionsPerDay?.filter(
    (_, i) => i !== 0 && i !== 1
  );

  conversionsPerDayFiltered?.pop();

  const conversionsPerDayFormatted = conversionsPerDayFiltered?.map(
    (conversion) => {
      const [_, month, day] = conversion.date_key.split('-');
      return {
        ...conversion,
        date_key: `${day}-${month}`,
      };
    }
  );

  const totalAmountPerDay = allStatsByDay?.map(
    ({ date_key, total_amount_brl }) => ({ date_key, total_amount_brl })
  );

  const totalAmountPerDayFiltered = totalAmountPerDay?.filter(
    (_, i) => i !== 0 && i !== 1
  );

  totalAmountPerDayFiltered?.pop();

  const totalAmountPerDayFormatted = totalAmountPerDayFiltered?.map(
    (conversion) => {
      const [_, mes, dia] = conversion.date_key.split('-');
      return {
        ...conversion,
        date_key: `${dia}-${mes}`,
      };
    }
  );

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Dashboard Analytics
        </h1>
        <p className="text-muted-foreground mt-1">
          Visão geral das métricas de conversão e engajamento dos seus players
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Visualizações"
            value={allStats ? allStats.total_viewed : ''}
            description="Número de vezes que o vídeo foi carregado"
            icon={<Target className="h-4 w-4" />}
            // trend={{
            //   value: allStats?.total_amount_usd! / 100,
            //   isPositive: conversions?.total_amount_usd === 0 ? false : true,
            // }}
            className="bg-gradient-to-br from-card to-accent/5"
          />
        )}
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Play Rate"
            value={allStats ? `${allStats.play_rate}%` : ''}
            description="Número de plays únicos dividido pela quantidade de visualizações únicas"
            icon={<TrendingUp className="h-4 w-4" />}
            // trend={{
            //   value: allStats ? allStats.play_rate : '',
            //   isPositive: true,
            // }}
            className="bg-gradient-to-br from-card to-success/5"
          />
        )}

        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Retenção ao Pitch"
            value={allStats ? `${allStats.over_pitch_rate}%` : ''}
            description="% de pessoas que estão chegando"
            icon={<Users className="h-4 w-4" />}
            // trend={{
            //   value: +2.1,
            //   label: 'vs ontem',
            //   isPercent: true,
            //   isPositive: true,
            // }}
            className="bg-gradient-to-br from-card to-warning/5"
          />
        )}
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Conversões"
            value={allStats ? allStats.total_conversions : ''}
            description="Número de conversões do vídeo"
            icon={<Play className="h-4 w-4" />}
            // trend={{
            //   value: allPlayersConversions?.total_amount_usd! / 100,
            //   isPositive: allPlayersConversions?.total_amount_usd! / 100 > 0,
            // }}
            className="bg-gradient-to-br from-card to-primary/5"
          />
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Taxa de Conversão"
            value={allStats ? `${allStats.overall_conversion_rate}%` : ''}
            description="Número de conversões dividido pelo número de plays únicos"
            icon={<Clock className="h-4 w-4" />}
            // trend={{ value: 8.1, isPositive: true }}
          />
        )}
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Receita"
            value={
              allStats
                ? (allStats.total_amount_brl / 100).toLocaleString('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  })
                : ''
            }
            description="Receita total gerada a partir de conversões"
            icon={<Zap className="h-4 w-4" />}
            // trend={{ value: 145 }}
          />
        )}
        {areAllStatsLoading ? (
          <Skeleton className="h-40 bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Engajamento"
            value={allStats ? `${allStats.engagement_rate}%` : ''}
            description="Total do vídeo assistido dividido pela quantidade de plays multiplicado pela duração do vídeo"
            icon={<Target className="h-4 w-4" />}
            // trend={{ value: 5.3, isPositive: true }}
          />
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {areAllStatsByDayStatsLoading ? (
          <Skeleton className="h-[428px] bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <LineChartComponent
            title="Conversões Diárias"
            description="Evolução das conversões nos últimos 7 dias"
            data={conversionsPerDayFormatted}
            dataKey="total_conversions"
            xAxisKey="date_key"
            color="var(--primary)"
          />
        )}
        {areAllStatsByDayStatsLoading ? (
          <Skeleton className="h-[428px] bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <BarChartComponent
            title="Receita por dia"
            description="Distribuição de receita ao longo dos dias"
            data={totalAmountPerDayFormatted}
            dataKey="total_amount_brl"
            xAxisKey="date_key"
            color="var(--primary)"
          />
        )}
      </div>
    </div>
  );
}
