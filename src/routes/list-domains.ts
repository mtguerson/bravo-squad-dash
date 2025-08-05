import { api } from '@/lib/axios';

interface ListDomainsRequest {
  playerId: string;
}

type ListDomainsResponse = Array<{
  domain: string;
  live_users: number;
}>;

export async function listDomains({ playerId }: ListDomainsRequest) {
  const response = await api.get<ListDomainsResponse>(
    `/list-domains/${playerId}`
  );

  return response.data;
}
