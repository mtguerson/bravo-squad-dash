import { createPlayer } from '@/routes/create-player';
import { listPlayers } from '@/routes/list-players';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useListPlayers() {
  const { data, isLoading } = useQuery({
    queryKey: ['players'],
    queryFn: async () => listPlayers(),
  });

  return {
    players: data,
    arePlayersLoading: isLoading,
  };
}

interface CreatePlayerRequest {
  id: string;
  name: string;
}

export function useCreatePlayer() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ id, name }: CreatePlayerRequest) =>
      createPlayer({ id, name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['players'] });
    },
  });

  return {
    createPlayer: mutateAsync,
    isCreatePlayerExecuting: isPending,
  };
}
