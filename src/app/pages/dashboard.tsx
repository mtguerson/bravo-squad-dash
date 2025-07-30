import { Target, TrendingUp, Users, Play, Clock, Zap } from 'lucide-react';
import { MetricCard } from '@/components/dashboard/metric-card';
import { LineChartComponent } from '@/components/charts/line-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';

const conversionData = [
  { date: '01/12', conversions: 142 },
  { date: '02/12', conversions: 158 },
  { date: '03/12', conversions: 134 },
  { date: '04/12', conversions: 189 },
  { date: '05/12', conversions: 167 },
  { date: '06/12', conversions: 203 },
  { date: '07/12', conversions: 178 },
];

const engagementData = [
  { hour: '00h', engagement: 24 },
  { hour: '04h', engagement: 18 },
  { hour: '08h', engagement: 67 },
  { hour: '12h', engagement: 89 },
  { hour: '16h', engagement: 145 },
  { hour: '20h', engagement: 98 },
];

export function Dashboard() {
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
        <MetricCard
          title="Conversões Hoje"
          value="1,247"
          description="Total de conversões registradas"
          icon={<Target className="h-4 w-4" />}
          trend={{ value: 12.5, label: 'vs ontem', isPositive: true }}
          className="bg-gradient-to-br from-card to-accent/5"
        />
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
          dataKey="conversions"
          xAxisKey="date"
          color="var(--primary)"
        />
        <BarChartComponent
          title="Engajamento por Horário"
          description="Distribuição de engajamento ao longo do dia"
          data={engagementData}
          dataKey="engagement"
          xAxisKey="hour"
          color="var(--primary)"
        />
      </div>
    </div>
  );
}
