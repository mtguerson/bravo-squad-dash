import { NavLink, useLocation } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Play,
  Settings,
  Home,
  Target,
  Clock,
  Globe,
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
import { useState } from 'react';

const items = [
  { title: 'Dashboard', url: '/', icon: Home },
  { title: 'Domínios', url: '/domains', icon: Globe },
  { title: 'Conversões', url: '/conversions', icon: Target },
  { title: 'Engajamento', url: '/engagement', icon: TrendingUp },
  { title: 'Retenção', url: '/retention', icon: Clock },
  { title: 'Sessões', url: '/sessions', icon: Users },
  { title: 'Players', url: '/players', icon: Play },
  { title: 'Configurações', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const [firstItem] = useState(items[0]);
  const [secondItem] = useState(items[1]);
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

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
            Navegação principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={firstItem.url}
                    end
                    className={
                      currentPath === firstItem.url
                        ? 'bg-primary/70 text-primary-foreground font-medium shadow-md'
                        : ''
                    }
                    title={collapsed ? firstItem.title : undefined}
                  >
                    <firstItem.icon className="h-4 w-4 shrink-0 text-foreground" />
                    {!collapsed && (
                      <span className="ml-3 text-foreground">
                        {firstItem.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={secondItem.url}
                    className={
                      currentPath === secondItem.url
                        ? 'bg-primary/70 text-primary-foreground font-medium shadow-md'
                        : ''
                    }
                    title={collapsed ? secondItem.title : undefined}
                  >
                    <secondItem.icon className="h-4 w-4 shrink-0 text-foreground" />
                    {!collapsed && (
                      <span className="ml-3 text-foreground">
                        {secondItem.title}
                      </span>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Em Breve
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.slice(1).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    disabled
                    className="cursor-not-allowed opacity-60 hover:opacity-70 transition-opacity"
                    title={
                      collapsed
                        ? `${item.title} - Em desenvolvimento`
                        : undefined
                    }
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    {!collapsed && (
                      <div className="ml-3 flex items-center justify-between w-full">
                        <span className="text-muted-foreground">
                          {item.title}
                        </span>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          Em breve
                        </span>
                      </div>
                    )}
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
