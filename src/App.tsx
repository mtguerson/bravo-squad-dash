import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { ThemeProvider } from './components/theme-provider';
import { Header } from './components/header';
import { Dashboard } from './app/pages/dashboard';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { HeaderProvider } from './contexts/header-context';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <BrowserRouter>
          <SidebarProvider defaultOpen={true}>
            <div className="min-h-screen flex w-full bg-gradient-background">
              <AppSidebar />
              <div className="flex-1 flex flex-col">
                <HeaderProvider>
                  <Header />
                  <main className="flex-1 overflow-auto">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                  </main>
                </HeaderProvider>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
