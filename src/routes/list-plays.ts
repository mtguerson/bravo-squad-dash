import { api } from '@/lib/axios';

type ListPlaysResponse = Array<{
  event: string;
  total: string;
  total_uniq_sessions: number;
  total_uniq_device: number;
}>;

interface ListPlaysRequest {
  startDate: string;
  endDate: string;
  events: Array<string>;
  playerId: string;
}

export async function listPlays({
  startDate,
  endDate,
  events,
  playerId,
}: ListPlaysRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await api.post<ListPlaysResponse>('/list-plays', {
    startDate,
    endDate,
    events,
    playerId,
  });

  return response.data;
}
