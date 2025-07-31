import { listConversions } from '@/routes/list-conversions';
import { useQuery } from '@tanstack/react-query';

interface IUseConversionsProps {
  startOfTheDay: string;
  endOfTheDay: string;
  playerId: string;
}

interface IUseAllPlayersConversionsProps {
  startOfTheDay: string;
  endOfTheDay: string;
  players: { value: string; label: string }[];
}

interface IAggregatedConversions {
  total_events: number;
  total_uniq_session_events: number;
  total_uniq_device_events: number;
  total_amount_usd: number;
  total_amount_brl: number;
  total_amount_eur: number;
  players_data: Array<{
    playerId: string;
    playerLabel: string;
    conversions: any;
  }>;
}

export function useConversions({
  startOfTheDay,
  endOfTheDay,
  playerId,
}: IUseConversionsProps) {
  const { data, isLoading } = useQuery({
    queryFn: () =>
      listConversions({
        startDate: startOfTheDay,
        endDate: endOfTheDay,
        playerId,
      }),
    queryKey: ['vsl', playerId, startOfTheDay, endOfTheDay],
  });

  return {
    conversions: data,
    isConversionsLoading: isLoading,
  };
}

export function useAllPlayersConversions({
  startOfTheDay,
  endOfTheDay,
  players,
}: IUseAllPlayersConversionsProps) {
  const { data, isLoading } = useQuery({
    queryFn: async (): Promise<IAggregatedConversions> => {
      const conversionsPromises = players.map((player) =>
        listConversions({
          startDate: startOfTheDay,
          endDate: endOfTheDay,
          playerId: player.value,
        }).then((conversions) => ({
          playerId: player.value,
          playerLabel: player.label,
          conversions,
        }))
      );

      const playersResults = await Promise.all(conversionsPromises);

      const aggregated: IAggregatedConversions = {
        total_events: 0,
        total_uniq_session_events: 0,
        total_uniq_device_events: 0,
        total_amount_usd: 0,
        total_amount_brl: 0,
        total_amount_eur: 0,
        players_data: playersResults,
      };

      playersResults.forEach(({ conversions }) => {
        if (conversions) {
          aggregated.total_events += conversions.total_events || 0;
          aggregated.total_uniq_session_events +=
            conversions.total_uniq_session_events || 0;
          aggregated.total_uniq_device_events +=
            conversions.total_uniq_device_events || 0;
          aggregated.total_amount_usd += conversions.total_amount_usd || 0;
          aggregated.total_amount_brl += conversions.total_amount_brl || 0;
          aggregated.total_amount_eur += conversions.total_amount_eur || 0;
        }
      });

      return aggregated;
    },
    queryKey: [
      'all-players-vsl',
      players.map((p) => p.value).join(','),
      startOfTheDay,
      endOfTheDay,
    ],
    enabled: players.length > 0,
  });

  return {
    allPlayersConversions: data,
    isAllPlayersConversionsLoading: isLoading,
  };
}
