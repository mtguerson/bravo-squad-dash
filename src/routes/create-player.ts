import { api } from '@/lib/axios';

interface CreatePlayerRequest {
  id: string;
  name: string;
}

export async function createPlayer({ id, name }: CreatePlayerRequest) {
  await api.post('/create-player', {
    id,
    name,
  });
}
