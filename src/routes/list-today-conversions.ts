import { api } from '@/lib/axios';

interface ListTodayConversions {
  player_id: string;
  start_date: string;
  end_date: string;
  timezone?: string;
}

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

export async function listTodayConversions() {
  setTimeout(() => {
    console.log('Delayed for 1 second.');
  }, 1000000);

  const response = await api.get<ListTodayResponse>('/teste');

  return response.data;
}
