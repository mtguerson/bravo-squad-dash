import { listDomains } from '@/routes/list-domains';
import { useQuery } from '@tanstack/react-query';

interface UseDomainsProps {
  playerId: string;
}

export function useDomains({ playerId }: UseDomainsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['domains', playerId],
    queryFn: async () => listDomains({ playerId }),
  });

  return {
    domains: data,
    areDomainsLoading: isLoading,
  };
}
