import { Target, TrendingUp, Users, Play, Clock, Zap } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/metric-card';
import { LineChartComponent } from '@/components/charts/line-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { Skeleton } from '@/components/ui/skeleton';
import { useHeader } from '@/hooks/use-header';
import { useAllStats } from '@/hooks/use-all-stats';

const conversionData = [
  { data: '01/12', conversões: 142 },
  { data: '02/12', conversões: 158 },
  { data: '03/12', conversões: 134 },
  { data: '04/12', conversões: 189 },
  { data: '05/12', conversões: 167 },
  { data: '06/12', conversões: 203 },
  { data: '07/12', conversões: 178 },
];

const engagementData = [
  { hora: '00h', engajamento: 24 },
  { hora: '04h', engajamento: 18 },
  { hora: '08h', engajamento: 67 },
  { hora: '12h', engajamento: 89 },
  { hora: '16h', engajamento: 145 },
  { hora: '20h', engajamento: 98 },
];

export function Dashboard() {
  const { selectedPlayer, selectedPeriod } = useHeader();

  // const { conversions, areConversionsLoading } = useConversions({
  //   startOfTheDay: selectedPeriod.startOfTheDay,
  //   endOfTheDay: selectedPeriod.endOfTheDay,
  //   playerId: selectedPlayer.value,
  // });

  // const { allPlayersConversions, isAllPlayersConversionsLoading } =
  //   useAllPlayersConversions({
  //     startOfTheDay: selectedPeriod.startOfTheDay,
  //     endOfTheDay: selectedPeriod.endOfTheDay,
  //     players: players,
  //   });

  // const { plays, arePlaysLoading } = usePlays({
  //   startOfTheDay: selectedPeriod.startOfTheDay,
  //   endOfTheDay: selectedPeriod.endOfTheDay,
  //   playerId: selectedPlayer.value,
  //   events: ['started'],
  // });

  // const { liveUsers, areLiveUsersLoading } = useLiveUsers(selectedPlayer.value);

  const { allStats, areAllStatsLoading } = useAllStats({
    playerId: selectedPlayer.value,
    startDate: selectedPeriod.startOfTheDay,
    endDate: selectedPeriod.endOfTheDay,
  });

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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
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
        <LineChartComponent
          title="Conversões Diárias"
          description="Evolução das conversões nos últimos 7 dias"
          data={conversionData}
          dataKey="conversões"
          xAxisKey="data"
          color="var(--primary)"
        />
        <BarChartComponent
          title="Engajamento por Horário"
          description="Distribuição de engajamento ao longo do dia"
          data={engagementData}
          dataKey="engajamento"
          xAxisKey="hora"
          color="var(--primary)"
        />
      </div>
    </div>
  );
}
