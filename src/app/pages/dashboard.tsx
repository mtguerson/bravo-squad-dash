import { Target, TrendingUp, Users, Play, Clock, Zap } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/metric-card';
import { LineChartComponent } from '@/components/charts/line-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { useQuery } from '@tanstack/react-query';
import { listTodayConversions } from '@/routes/list-today-conversions';
import { Skeleton } from '@/components/ui/skeleton';

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
  const { data, isLoading } = useQuery({
    queryFn: () => listTodayConversions(),
    queryKey: ['today'],
  });

  console.log(data);

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
        {isLoading ? (
          <Skeleton className="bg-gradient-to-br from-card to-accent/5 rounded-2xl" />
        ) : (
          <MetricCard
            title="Conversões Hoje"
            value={data?.total_events!}
            description="Total de conversões registradas"
            icon={<Target className="h-4 w-4" />}
            trend={{
              value: data?.total_amount_usd!,
              label: 'vs ontem',
              isPositive: data?.total_amount_usd === 0 ? false : true,
            }}
            className="bg-gradient-to-br from-card to-accent/5"
          />
        )}
        <MetricCard
          title="Taxa de Engajamento"
          value="68.3%"
          description="Média de interação dos usuários"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 3.2, label: 'vs semana passada', isPositive: true }}
          className="bg-gradient-to-br from-card to-success/5"
        />
        <MetricCard
          title="Sessões Ativas"
          value="892"
          description="Usuários assistindo agora"
          icon={<Users className="h-4 w-4" />}
          trend={{ value: -2.1, label: 'vs ontem', isPositive: false }}
          className="bg-gradient-to-br from-card to-warning/5"
        />
        <MetricCard
          title="Players Ativos"
          value="24"
          description="Total de players em funcionamento"
          icon={<Play className="h-4 w-4" />}
          trend={{ value: 0, label: 'sem alteração' }}
          className="bg-gradient-to-br from-card to-primary/5"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard
          title="Tempo Médio de Visualização"
          value="3:42"
          description="Minutos por sessão"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 8.1, label: 'vs média mensal', isPositive: true }}
        />
        <MetricCard
          title="Pico de Audiência"
          value="16:30"
          description="Horário com mais conversões"
          icon={<Zap className="h-4 w-4" />}
          trend={{ value: 145, label: 'conversões no pico' }}
        />
        <MetricCard
          title="Player Destaque"
          value="Player Principal"
          description="Maior taxa de conversão (72%)"
          icon={<Target className="h-4 w-4" />}
          trend={{ value: 5.3, label: 'vs outros players', isPositive: true }}
        />
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
