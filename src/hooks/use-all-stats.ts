import { listAllStats } from '@/routes/list-all-stats';
import { listAllStatsByDay } from '@/routes/list-all-stats-by-day';
import { useQuery } from '@tanstack/react-query';

interface UseAllStatsProps {
  playerId: string;
  startDate: string;
  endDate: string;
}

export function useAllStats({
  startDate,
  endDate,
  playerId,
}: UseAllStatsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['all-stats', playerId, startDate, endDate],
    queryFn: async () => listAllStats({ startDate, endDate, playerId }),
    enabled: !!playerId && playerId.length > 0,
  });

  return {
    allStats: data,
    areAllStatsLoading: isLoading,
  };
}

export function useAllStatsByDay({
  startDate,
  endDate,
  playerId,
}: UseAllStatsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['all-stats-by-day', playerId],
    queryFn: async () => listAllStatsByDay({ startDate, endDate, playerId }),
    enabled: !!playerId && playerId.length > 0,
  });

  return {
    allStatsByDay: data,
    areAllStatsByDayStatsLoading: isLoading,
  };
}
