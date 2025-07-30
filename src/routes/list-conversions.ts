import { api } from '@/lib/axios';

interface ListTodayResponse {
  total_events: number;
  total_uniq_session_events: number;
  total_uniq_device_events: number;
  total_amount_usd: number;
  total_amount_brl: number;
  total_amount_eur: number;
  events_by_day: {
    day: string;
    total: number;
    total_uniq_sessions: number;
    total_uniq_device: number;
  }[];
}

interface ListConversionsRequest {
  startDate: string;
  endDate: string;
  playerId: string;
}

export async function listConversions({
  startDate,
  endDate,
  playerId,
}: ListConversionsRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await api.post<ListTodayResponse>('/list-conversions', {
    startDate,
    endDate,
    playerId,
  });

  return response.data;
}
