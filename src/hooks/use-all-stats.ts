import { listAllStats } from '@/routes/list-all-stats';
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
    queryKey: ['all', playerId, startDate, endDate],
    queryFn: async () => listAllStats({ startDate, endDate, playerId }),
  });

  return {
    allStats: data,
    areAllStatsLoading: isLoading,
  };
}
