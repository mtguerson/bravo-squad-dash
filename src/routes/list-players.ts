import { api } from '@/lib/axios';

type ListPlayersResponse = Array<{
  id: string;
  name: string;
  createdAt: string;
}>;

export async function listPlayers() {
  const response = await api.get<ListPlayersResponse>('/list-players');

  return response.data;
}
