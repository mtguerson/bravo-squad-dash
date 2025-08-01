import { listPlays } from '@/routes/list-plays';
import { useQuery } from '@tanstack/react-query';

interface IUsePlaysProps {
  startOfTheDay: string;
  endOfTheDay: string;
  playerId: string;
  events: Array<string>;
}

export function usePlays({
  startOfTheDay,
  endOfTheDay,
  playerId,
  events,
}: IUsePlaysProps) {
  const { data, isLoading } = useQuery({
    queryFn: async () =>
      listPlays({
        startDate: startOfTheDay,
        endDate: endOfTheDay,
        playerId,
        events,
      }),
    queryKey: ['plays', playerId, startOfTheDay, endOfTheDay],
  });

  return {
    plays: data,
    arePlaysLoading: isLoading,
  };
}
