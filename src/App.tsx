import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { ThemeProvider } from './components/theme-provider';
import { Header } from './components/header';
import { Dashboard } from './app/pages/dashboard';

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full bg-gradient-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
