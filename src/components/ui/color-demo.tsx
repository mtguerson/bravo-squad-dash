export function ColorDemo() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Demonstração das Cores Shadcn/UI
      </h2>

      {/* Background e Foreground */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-background text-foreground p-4 rounded-lg border border-border">
          <h3 className="font-semibold">Background</h3>
          <p className="text-sm text-muted-foreground">
            bg-background text-foreground
          </p>
        </div>
        <div className="bg-card text-card-foreground p-4 rounded-lg border border-border">
          <h3 className="font-semibold">Card</h3>
          <p className="text-sm text-muted-foreground">
            bg-card text-card-foreground
          </p>
        </div>
      </div>

      {/* Primary e Secondary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary text-primary-foreground p-4 rounded-lg">
          <h3 className="font-semibold">Primary</h3>
          <p className="text-sm opacity-90">
            bg-primary text-primary-foreground
          </p>
        </div>
        <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
          <h3 className="font-semibold">Secondary</h3>
          <p className="text-sm opacity-90">
            bg-secondary text-secondary-foreground
          </p>
        </div>
      </div>

      {/* Muted e Accent */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted text-muted-foreground p-4 rounded-lg">
          <h3 className="font-semibold text-foreground">Muted</h3>
          <p className="text-sm">bg-muted text-muted-foreground</p>
        </div>
        <div className="bg-accent text-accent-foreground p-4 rounded-lg">
          <h3 className="font-semibold">Accent</h3>
          <p className="text-sm opacity-90">bg-accent text-accent-foreground</p>
        </div>
      </div>

      {/* Destructive */}
      <div className="bg-destructive text-destructive-foreground p-4 rounded-lg">
        <h3 className="font-semibold">Destructive</h3>
        <p className="text-sm opacity-90">
          bg-destructive text-destructive-foreground
        </p>
      </div>

      {/* Popover */}
      <div className="bg-popover text-popover-foreground p-4 rounded-lg border border-border shadow-md">
        <h3 className="font-semibold">Popover</h3>
        <p className="text-sm text-muted-foreground">
          bg-popover text-popover-foreground
        </p>
      </div>

      {/* Sidebar Colors */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Cores do Sidebar</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-sidebar text-sidebar-foreground p-4 rounded-lg border border-sidebar-border">
            <h4 className="font-medium">Sidebar</h4>
            <p className="text-sm opacity-90">
              bg-sidebar text-sidebar-foreground
            </p>
          </div>
          <div className="bg-sidebar-accent text-sidebar-accent-foreground p-4 rounded-lg">
            <h4 className="font-medium">Sidebar Accent</h4>
            <p className="text-sm opacity-90">
              bg-sidebar-accent text-sidebar-accent-foreground
            </p>
          </div>
        </div>
      </div>

      {/* Estados de Hover */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Estados Interativos</h3>
        <div className="space-y-2">
          <button className="w-full p-3 text-left rounded-lg bg-card text-card-foreground border border-border hover:bg-accent hover:text-accent-foreground transition-colors">
            Hover: bg-accent text-accent-foreground
          </button>
          <button className="w-full p-3 text-left rounded-lg bg-card text-card-foreground border border-border hover:bg-primary/10 hover:text-primary transition-colors">
            Hover: bg-primary/10 text-primary
          </button>
          <button className="w-full p-3 text-left rounded-lg bg-card text-card-foreground border border-border hover:bg-muted hover:text-muted-foreground transition-colors">
            Hover: bg-muted text-muted-foreground
          </button>
        </div>
      </div>

      {/* Bordas e Inputs */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Bordas e Inputs</h3>
        <input
          type="text"
          placeholder="Input com border-input bg-background"
          className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
        />
        <div className="p-3 rounded-lg border border-border bg-card text-card-foreground">
          border-border bg-card
        </div>
      </div>
    </div>
  );
}
