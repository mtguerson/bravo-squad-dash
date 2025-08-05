import { Globe } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { useHeader } from '@/hooks/use-header';
import { useDomains } from '@/hooks/use-domains';
import { Header } from '@/components/header';

export function Domains() {
  const { selectedPlayer } = useHeader();

  const { areDomainsLoading, domains } = useDomains({
    playerId: selectedPlayer.value,
  });

  return (
    <>
      <Header shouldAppearPeriod={false} />
      <div className="p-6 space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Domínios Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Visualização dos domínios e usuários ativos em tempo real
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Domínios e Usuários Ativos
          </h2>

          {areDomainsLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {domains && domains.length > 0 ? (
                domains
                  .sort((a, b) => b.live_users - a.live_users)
                  .map((domainData) => (
                    <Card
                      key={domainData.domain}
                      className="transition-all duration-200 hover:shadow-lg hover:scale-[1.01] bg-gradient-to-r from-card to-muted/20"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-primary" />
                            <span className="text-lg font-medium text-foreground">
                              {domainData.domain}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-primary">
                              {domainData.live_users}
                            </span>
                            <span className="text-sm text-muted-foreground ml-2">
                              usuários
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Nenhum domínio encontrado
                    </h3>
                    <p className="text-muted-foreground">
                      Não há domínios com atividade para o player selecionado.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
