import { BrowserRouter } from 'react-router-dom';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';

export function App() {
  return (
    <BrowserRouter>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
      </SidebarProvider>
    </BrowserRouter>
  );
}
