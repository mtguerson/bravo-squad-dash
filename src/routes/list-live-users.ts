import { api } from '@/lib/axios';

interface ListLiveUsersRequest {
  playerId: string;
}

type ListLiveUsersResponse = Array<{
  domain: string;
  live_users: number;
}>;

export async function listLiveUsers({ playerId }: ListLiveUsersRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await api.get<ListLiveUsersResponse>(
    `/list-live-users/${playerId}`
  );

  return response.data;
}
