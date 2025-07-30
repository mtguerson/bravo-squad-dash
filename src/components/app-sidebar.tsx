import { NavLink } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Play,
  Settings,
  Home,
  Target,
  Clock,
  Zap,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

import bravoLogo from '@/assets/skull_with_transparent_background.png';

const items = [
  { title: 'Dashboard', url: '/', icon: Home },
  { title: 'Conversões', url: '/conversions', icon: Target },
  { title: 'Engajamento', url: '/engagement', icon: TrendingUp },
  { title: 'Retenção', url: '/retention', icon: Clock },
  { title: 'Sessões', url: '/sessions', icon: Users },
  { title: 'Players', url: '/players', icon: Play },
  { title: 'Métricas Personalizadas', url: '/custom-metrics', icon: Zap },
  { title: 'Configurações', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  // const location = useLocation();
  // const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  // function isActive(path: string) {
  //   return currentPath === path;
  // }

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'bg-primary text-primary-foreground font-medium shadow-md'
      : 'hover:bg-accent/50 hover:text-accent-foreground transition-colors';

  return (
    <Sidebar className={collapsed ? 'w-16' : 'w-64'} collapsible="icon">
      <SidebarContent className="bg-gradient-to-b from-card to-muted/20">
        <div className="p-4 border-b border-border">
          {!collapsed ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <img
                    src={bravoLogo}
                    className="dark:invert dark:brightness-0 dark:contrast-100"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">Bravo</h2>
                  <p className="text-xs text-muted-foreground">
                    SquadAnalytics
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img
                  src={bravoLogo}
                  className="dark:invert dark:brightness-0 dark:contrast-100"
                />
              </div>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Navegação Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={getNavCls}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-foreground" />
                      {!collapsed && (
                        <span className="ml-3 text-foreground">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
