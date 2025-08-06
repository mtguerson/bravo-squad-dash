import { listPlayers } from '@/routes/list-players';
import { useQuery } from '@tanstack/react-query';

export function usePlayers() {
  const { data, isLoading } = useQuery({
    queryKey: ['players'],
    queryFn: async () => listPlayers(),
  });

  return {
    players: data,
    arePlayersLoading: isLoading,
  };
}
