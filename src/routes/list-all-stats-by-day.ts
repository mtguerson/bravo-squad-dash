import { api } from '@/lib/axios';

interface ListAllStatsByDayRequest {
  playerId: string;
  startDate: string;
  endDate: string;
}

type ListALlStatsResponse = Array<{
  date_key: string;
  total_viewed: number;
  total_viewed_session_uniq: number;
  total_viewed_device_uniq: number;
  total_started: number;
  total_started_session_uniq: number;
  total_started_device_uniq: number;
  total_finished: number;
  total_finished_session_uniq: number;
  total_finished_device_uniq: number;
  total_clicked: number;
  total_clicked_session_uniq: number;
  total_clicked_device_uniq: number;
  engagement_rate: number;
  total_over_pitch: number;
  total_under_pitch: number;
  over_pitch_rate: number;
  play_rate: number;
  total_conversions: number;
  total_amount_usd: number;
  total_amount_brl: number;
  total_amount_eur: number;
  overall_conversion_rate: number;
}>;

export async function listAllStatsByDay({
  startDate,
  endDate,
  playerId,
}: ListAllStatsByDayRequest) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await api.post<ListALlStatsResponse>(
    '/list-all-stats-by-day',
    {
      startDate,
      endDate,
      playerId,
    }
  );

  return response.data;
}
