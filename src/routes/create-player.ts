import { api } from '@/lib/axios';
import { sleep } from '@/lib/utils';

interface CreatePlayerRequest {
  id: string;
  name: string;
}

export async function createPlayer({ id, name }: CreatePlayerRequest) {
  await sleep();

  await api.post('/create-player', {
    id,
    name,
  });
}
