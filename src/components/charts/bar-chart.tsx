import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface BarChartComponentProps {
  title: string;
  description?: string;
  data:
    | Array<{
        date_key: string;
        total_amount_brl: number;
      }>
    | undefined;
  dataKey: string;
  xAxisKey: string;
  xAxisLabel?: string;
  dataLabel?: string;
  color?: string;
  height?: number;
}

export function BarChartComponent({
  title,
  description,
  data,
  dataKey,
  xAxisKey,
  xAxisLabel,
  dataLabel,
  color = 'var(--chart-1)',
  height = 300,
}: BarChartComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data}>
            <XAxis
              dataKey={xAxisKey}
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-md">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-primary">
                            {xAxisLabel || xAxisKey}
                          </span>
                          <span className="font-bold text-foreground">
                            {label}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-primary">
                            {dataLabel || dataKey}
                          </span>
                          <span className="font-bold">
                            {(payload[0].value / 100).toLocaleString('pt-BR', {
                              currency: 'BRL',
                              style: 'currency',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
