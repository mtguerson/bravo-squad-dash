# Bravo Squad Dashboard

A modern, responsive analytics dashboard built with React, TypeScript, and Tailwind CSS for video player analytics and domain monitoring.

## 🚀 Features

### 📊 Dashboard Analytics

- **Real-time Metrics**: Track video views, play rates, conversions, and revenue
- **Engagement Analytics**: Monitor pitch retention, conversion rates, and user engagement
- **Interactive Charts**: Daily conversion trends and revenue distribution visualization
- **Responsive Design**: Optimized for desktop and mobile devices

### 🌐 Domain Management

- **Live Domain Monitoring**: Real-time tracking of active users across domains
- **Domain Analytics**: View user activity in the last 30 minutes
- **Sorted Display**: Domains automatically sorted by active user count

### 👥 Player Management

- **Multi-player Support**: Switch between different video players
- **Player Creation**: Add new players through an intuitive form interface
- **Player Statistics**: Individual analytics for each player

### 🎨 Modern UI/UX

- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Gradient Backgrounds**: Beautiful gradient designs throughout the interface
- **Skeleton Loading**: Smooth loading states for better user experience
- **Sidebar Navigation**: Collapsible sidebar with upcoming features preview

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React version with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management

### State Management & Data Fetching

- **TanStack Query** - Powerful data synchronization
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Charts & Visualization

- **Recharts** - Composable charting library
- **Date-fns** - Modern JavaScript date utility library

### Routing & Navigation

- **React Router DOM 7** - Client-side routing

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bravo-squad-dash
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Build for production**

   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   └── pages/           # Application pages
│       ├── dashboard.tsx
│       └── domains.tsx
├── components/
│   ├── ui/             # Reusable UI components
│   ├── charts/         # Chart components
│   ├── dashboard/      # Dashboard-specific components
│   └── header/         # Header components
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── routes/             # API route functions
├── lib/               # Utility libraries
└── assets/            # Static assets
```

## 🎯 Key Components

### Dashboard Page

- **Metric Cards**: Display key performance indicators
- **Line Charts**: Show conversion trends over time
- **Bar Charts**: Visualize revenue distribution
- **Responsive Grid**: Adaptive layout for different screen sizes

### Domain Analytics

- **Live User Tracking**: Real-time active user counts
- **Domain Sorting**: Automatically sorted by activity
- **Empty States**: Graceful handling of no data scenarios

### Header System

- **Global Filters**: Player and period selection
- **Add Player Form**: Create new players inline
- **Theme Toggle**: Switch between dark/light modes
- **Responsive Design**: Mobile-friendly navigation

## 🔧 Configuration

### Environment Setup

The project uses Vite with the following configuration:

- **Path Aliases**: `@/` maps to `src/`
- **Auto-open**: Development server opens browser automatically
- **TypeScript**: Full TypeScript support with strict mode

### Tailwind CSS

- **Design System**: Custom color palette and spacing
- **Dark Mode**: System preference with manual toggle
- **Responsive Breakpoints**: Mobile-first approach
- **Custom Animations**: Smooth transitions and effects

## 📱 Responsive Design

The dashboard is fully responsive with:

- **Mobile-first approach**: Optimized for mobile devices
- **Flexible Grid System**: Adapts to different screen sizes
- **Collapsible Sidebar**: Space-efficient navigation on mobile
- **Touch-friendly Interface**: Optimized for touch interactions

## 🎨 Design System

### Color Palette

- **Primary Colors**: Brand-consistent color scheme
- **Gradient Backgrounds**: Beautiful gradient combinations
- **Semantic Colors**: Success, warning, and error states
- **Theme Support**: Consistent colors across light/dark themes

### Typography

- **Font Hierarchy**: Clear information hierarchy
- **Responsive Text**: Scales appropriately across devices
- **Accessibility**: High contrast ratios for readability

## 🚦 API Integration

The dashboard integrates with backend APIs for:

- **Player Management**: CRUD operations for players
- **Statistics Retrieval**: Fetch analytics data
- **Domain Monitoring**: Real-time domain activity
- **Date Range Filtering**: Flexible time period selection

## 🔮 Upcoming Features

The sidebar shows upcoming features in development:

- **Conversions Page**: Detailed conversion analytics
- **Engagement Page**: Advanced engagement metrics
- **Retention Page**: User retention analysis
- **Sessions Page**: Session-based analytics
- **Players Management**: Enhanced player administration
- **Settings Page**: Application configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ by the Bravo Squad team

![88fb87d6-84d8-4791-82f9-b01a429e2939](https://github.com/user-attachments/assets/99e041c5-1c24-4e9d-abf4-2bc5d2617fb9)
