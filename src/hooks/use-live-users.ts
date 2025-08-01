import { listLiveUsers } from '@/routes/list-live-users';
import { useQuery } from '@tanstack/react-query';

export function useLiveUsers(playerId: string) {
  const { data, isLoading } = useQuery({
    queryFn: () => listLiveUsers({ playerId }),
    queryKey: ['live-users', playerId],
  });

  return {
    liveUsers: data,
    areLiveUsersLoading: isLoading,
  };
}
