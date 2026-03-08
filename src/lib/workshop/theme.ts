export const DEFAULT_GLOBALS_CSS = `
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@custom-variant dark (&:is(.dark *));

:root {
  --font-serif: var(--font-funnel), ui-sans-serif, system-ui;  
  --font-sans: var(--font-funnel), ui-sans-serif, system-ui;
  --font-display: var(--font-khand), sans-serif;
  --font-mono: 'Fira Code', monospace;
  --background: oklch(98% 0 0deg);
  --foreground: oklch(27% 0.09 254.40deg);
  --card: oklch(100% 0.0001 271.152deg);
  --card-foreground: oklch(27% 0.09 254.40deg);
  --popover: oklch(1% 0 0deg);
  --popover-foreground: oklch(27% 0.09 254.40deg);
  --primary: oklch(27% 0.09 254.40deg);
  --primary-foreground: oklch(98% 0 0deg);
  --secondary: oklch(96% 0.01 210deg);
  --secondary-foreground:oklch(27% 0.09 254.40deg);
  --muted: oklch(96% 0 0deg);
  --muted-foreground: oklch(27% 0.09 254.40deg);
  --accent: oklch(78% 0.11 195.12deg);
  --accent-foreground:oklch(96% 0 0deg);
  --border: oklch(27% 0.09 254.40deg);
  --input: oklch(27% 0.09 254.40deg);
  /* States */
  --destructive: oklch(55% 0.21 31.81deg);
  --destructive-foreground: oklch(83% 0.04 220deg);
  --info: oklch(83% 0.04 220deg);
  --info-foreground: oklch(27% 0.09 254.40deg);
  --success: oklch(65% 0.12 219.43deg);
  --success-foreground: oklch(84% 0.14 85deg);
  --warning: oklch(55% 0.21 31.81deg);
  --warning-foreground: oklch(84% 0.14 85deg);
  --ring: oklch(78% 0.11 195.12deg);
  /* Charts */
  --chart-1: oklch(52% 0.10 230.09deg);
  --chart-2: oklch(65% 0.12 219.43deg);
  --chart-3: oklch(78% 0.11 195.12deg);
  --chart-4: oklch(83% 0.04 220deg);
  --chart-5: oklch(84% 0.14 85.21deg);
  --chart-6: oklch(66% 0.18 44.85deg);
  --chart-7: oklch(55% 0.21 32deg);
  --chart-8: oklch(45% 0.14 340deg);
  /* REVREBEL */
  --primary-inverse: oklch(83% 0.04 220deg);
  --color-1: oklch(52% 0.10 230.09deg);
  --color-1-fade: color-mix(in srgb, var(--color-1) 80%, white 20%);
  --color-1-inverse-fade: color-mix(in srgb, var(--color-1-inverse) 90%, black 10%);
  --color-1-inverse: oklch(96% 0.01 210deg);
  --color-2: oklch(78% 0.11 195.12deg);
  --color-2-fade: color-mix(in srgb, var(--color-2) 80%, white 20%);
  --color-2-inverse: oklch(84% 0.14 85.21deg);
  --color-2-inverse-fade: color-mix(in srgb, var(--color-2-inverse) 80%, white 20%);
  --color-3: oklch(78% 0.11 195.12deg);
  --color-3-fade: color-mix(in srgb, var(--color-3) 80%, white 20%);
  --color-3-inverse: oklch(45% 0.14 340deg);
  --color-3-inverse-fade: color-mix(in srgb, var(--color-3-inverse) 80%, white 20%);
  --color-4: oklch(83% 0.04 220deg);
  --color-4-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-4-inverse-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-4-inverse: oklch(27% 0.09 254.40deg);
  --color-5: oklch(84% 0.14 85.21deg);
  --color-5-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-5-inverse-fade: color-mix(in srgb, var(--color-5-inverse) 90%, white 10%);
  --color-5-inverse: oklch(27% 0.09 254.40deg);
  --color-6-fade: color-mix(in srgb, var(--color-6) 80%, white 20%);
  --color-6-inverse-fade: color-mix(in srgb, var(--color-6-inverse) 80%, white 20%);
  --color-6-inverse: oklch(27% 0.09 254.40deg);
  --color-6: oklch(66% 0.18 45deg);
  --color-7-fade: color-mix(in srgb, var(--color-7) 85%, black 15%);
  --color-7-inverse-fade: color-mix(in srgb, var(--color-4-inverse) 85%, black 15%);
  --color-7-inverse: oklch(83% 0.04 220deg);
  --color-7: oklch(55.% 0.21 32deg);
  --color-8: oklch(45% 0.14 340deg);
  --color-8-fade: color-mix(in srgb, var(--color-8) 80%, white 20%);
  --color-8-inverse-fade: color-mix(in srgb, var(--color-8-inverse) 80%, white 20%);
  --color-8-inverse: oklch(78% 0.11 195.12deg);
  --color-9: oklch(96% 0.01 210deg);
  --color-9-fade: color-mix(in srgb, var(--color-9) 80%, white 20%);
  --color-9-inverse-fade: color-mix(in srgb, var(--color-9-inverse) 80%, white 20%);
  --color-9-inverse: oklch(27% 0.09 254.40deg);
  /* Sidebar */
  --sidebar: oklch(96% 0 0deg);
  --sidebar-foreground: oklch(27% 0.09 254.40deg);
  --sidebar-primary: oklch(27% 0.09 254.40deg);
  --sidebar-primary-foreground: oklch(83% 0.04 220deg);
  --sidebar-accent: oklch(65% 0.12 219.43deg);
  --sidebar-accent-foreground: oklch(84% 0.14 85deg);
  --sidebar-border: oklch(96% 0 0deg);
  --sidebar-ring: oklch(78% 0.11 195.12deg);
  /* Shadows */
  --shadow-2xs: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 50%);
  --shadow-xs: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 50%);
  --shadow-sm: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 100%), 4px 1px 2px -1px oklch(34% 0.09 258.52deg / 100%);
  --shadow: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 100%), 4px 1px 2px -1px oklch(34% 0.09 258.52deg / 100%);
  --shadow-md: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 100%), 4px 2px 4px -1px oklch(34% 0.09 258.52deg / 100%);
  --shadow-lg: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 100%), 4px 4px 6px -1px oklch(34% 0.09 258.52deg / 100%);
  --shadow-xl: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 100%), 4px 8px 10px -1px oklch(34% 0.09 258.52deg / 100%);
  --shadow-2xl: 4px 4px 0px 0px oklch(34% 0.09 258.52deg / 250%);
  /* Radius */
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

.dark {
  --font-serif: var(--font-funnel), ui-sans-serif, system-ui;  
  --font-sans: var(--font-funnel), ui-sans-serif, system-ui;
  --font-display: var(--font-khand), sans-serif;
  --font-mono: 'Fira Code', monospace;
  --background: oklch(27% 0.09 254.40deg);
  --foreground: oklch(98% 0 0deg);
  --card: oklch(27% 0.09 254.40deg);
  --card-foreground: oklch(100% 0.0001 271.152deg);
  --popover: oklch(98% 0 0deg);
  --popover-foreground: oklch(27% 0.09 254.40deg);
  --primary: oklch(98% 0 0deg);
  --primary-foreground: oklch(27% 0.09 254.40deg);
  --secondary: oklch(78% 0.11 195.12deg);
  --secondary-foreground: oklch(84% 0.14 85.21deg);
  --muted: oklch(26.721% 0.0919 256.209deg / 69.6%);
  --muted-foreground: oklch(84% 0.14 85.21deg);
  --accent: oklch(78% 0.11 195.12deg);
  --accent-foreground: oklch(1% 0 0deg);
  --border: oklch(96% 0.01 210deg);
  --input: oklch(96% 0.01 210deg);
  /* Charts */
  --chart-1: oklch(52% 0.10 230.09deg);
  --chart-2: oklch(65% 0.12 219.43deg);
  --chart-3: oklch(78% 0.11 195.12deg);
  --chart-4: oklch(83% 0.04 220deg);
  --chart-5: oklch(84% 0.14 85.21deg);
  --chart-6: oklch(66% 0.18 44.85deg);
  --chart-7: oklch(55% 0.21 32deg);
  --chart-8: oklch(45% 0.14 340deg);
  /* States */
  --destructive: oklch(55% 0.21 31.81deg);
  --destructive-foreground: oklch(83% 0.04 220deg);
  --info: oklch(83% 0.04 220deg);
  --info-foreground: oklch(27% 0.09 254.40deg);
  --success: oklch(65% 0.12 219.43deg);
  --success-foreground: oklch(84% 0.14 85deg);
  --warning: oklch(55% 0.21 31.81deg);
  --warning-foreground: oklch(84% 0.14 85deg);
  --ring: oklch(78% 0.11 195.12deg);
  /* Sidebar */
  --primary-inverse: oklch(83% 0.04 220deg);
  --color-1: oklch(52% 0.10 230.09deg);
  --color-1-fade: color-mix(in srgb, var(--color-1) 80%, white 20%);
  --color-1-inverse-fade: color-mix(in srgb, var(--color-1-inverse) 90%, black 10%);
  --color-1-inverse: #eff5f6;
  --color-2: oklch(78% 0.11 195.12deg);
  --color-2-fade: color-mix(in srgb, var(--color-2) 80%, white 20%);
  --color-2-inverse: oklch(84% 0.14 85.21deg);
  --color-2-inverse-fade: color-mix(in srgb, var(--color-2-inverse) 80%, white 20%);
  --color-3: oklch(78% 0.11 195.12deg);
  --color-3-fade: color-mix(in srgb, var(--color-3) 80%, white 20%);
  --color-3-inverse: oklch(45% 0.14 340deg);
  --color-3-inverse-fade: color-mix(in srgb, var(--color-3-inverse) 80%, white 20%);
  --color-4: oklch(83% 0.04 220deg);
  --color-4-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-4-inverse-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-4-inverse: oklch(27% 0.09 254.40deg);
  --color-5: oklch(84% 0.14 85.21deg);
  --color-5-fade: color-mix(in srgb, var(--primary) 80%, white 20%);
  --color-5-inverse-fade: color-mix(in srgb, var(--color-5-inverse) 90%, white 10%);
  --color-5-inverse: oklch(27% 0.09 254.40deg);
  --color-6-fade: color-mix(in srgb, var(--color-6) 80%, white 20%);
  --color-6-inverse-fade: color-mix(in srgb, var(--color-6-inverse) 80%, white 20%);
  --color-6-inverse: oklch(27% 0.09 254.40deg);
  --color-6: oklch(66% 0.18 45deg);
  --color-7-fade: color-mix(in srgb, var(--color-7) 85%, black 15%);
  --color-7-inverse-fade: color-mix(in srgb, var(--color-4-inverse) 85%, black 15%);
  --color-7-inverse: oklch(83% 0.04 220deg);
  --color-7: oklch(55.% 0.21 32deg);
  --color-8: oklch(45% 0.14 340deg);
  --color-8-fade: color-mix(in srgb, var(--color-8) 80%, white 20%);
  --color-8-inverse-fade: color-mix(in srgb, var(--color-8-inverse) 80%, white 20%);
  --color-8-inverse: oklch(78% 0.11 195.12deg);
  --color-9: oklch(96% 0.01 210deg);
  --color-9-fade: color-mix(in srgb, var(--color-9) 80%, white 20%);
  --color-9-inverse-fade: color-mix(in srgb, var(--color-9-inverse) 80%, white 20%);
  --color-9-inverse: oklch(27% 0.09 254.40deg);
  /* Sidebar */
  --sidebar: oklch(100% 0 0deg);
  --sidebar-foreground: oklch(27% 0.09 254.40deg);
  --sidebar-primary: oklch(27% 0.09 254.40deg);
  --sidebar-primary-foreground: oklch(83% 0.04 220deg);
  --sidebar-accent: oklch(64% 0.14 215deg);
  --sidebar-accent-foreground: oklch(84% 0.14 85deg);
  --sidebar-border: oklch(100% 0 0deg);
  --sidebar-ring: oklch(78% 0.11 195.12deg);
  /* Shadows */
  --shadow-2xs: 0 1px 3px 0px oklch(0% 0 0deg / 5%);
  --shadow-xs: 0 1px 3px 0px oklch(0% 0 0deg / 5%);
  --shadow-sm: 0 1px 3px 0px oklch(0% 0 0deg / 10%), 0 1px 2px -1px oklch(0% 0 0deg / 10%);
  --shadow: 0 1px 3px 0px oklch(0% 0 0deg / 10%), 0 1px 2px -1px oklch(0% 0 0deg / 10%);
  --shadow-md: 0 1px 3px 0px oklch(0% 0 0deg / 10%), 0 2px 4px -1px oklch(0% 0 0deg / 10%);
  --shadow-lg: 0 1px 3px 0px oklch(0% 0 0deg / 10%), 0 4px 6px -1px oklch(0% 0 0deg / 10%);
  --shadow-xl: 0 1px 3px 0px oklch(0% 0 0deg / 10%), 0 8px 10px -1px oklch(0% 0 0deg / 10%);
  --shadow-2xl: 0 1px 3px 0px oklch(0% 0 0deg / 25%);
  /* Radius */
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

@theme inline {
  --font-serif: var(--font-funnel), ui-sans-serif, system-ui;  
  --font-sans: var(--font-funnel), ui-sans-serif, system-ui;
  --font-display: var(--font-khand), sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-chart-6: var(--chart-6);
  --color-chart-7: var(--chart-7);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  /* Computed Shadow Variants */
  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
  /* Radius */
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
  /* Letter Spacing */
  --tracking-tighter: calc(var(--letter-spacing) - 0.05em);
  --tracking-tight: calc(var(--letter-spacing) - 0.025em);
  --tracking-normal: var(--letter-spacing);
  --tracking-wide: calc(var(--letter-spacing) + 0.025em);
  --tracking-wider: calc(var(--letter-spacing) + 0.05em);
  --tracking-widest: calc(var(--letter-spacing) + 0.1em);
  --animate-rainbow: rainbow var(--speed, 2s) infinite linear;
  --animate-heartbeat: heartbeat 2s infinite ease-in-out;
  --color-destructive-foreground: var(--destructive-foreground);
  --color-warning-foreground: var(--warning-foreground);
  --color-warning: var(--warning);
  --color-success-foreground: var(--success-foreground);
  --color-success: var(--success);
  --color-info-foreground: var(--info-foreground);
  --color-info: var(--info);
}

@keyframes rainbow {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 200%;
  }
}

@keyframes heartbeat {
  0% {
    box-shadow: 0 0 0 0 var(--heartbeat-color, var(--destructive));
    transform: scale(1);
  }

  50% {
    box-shadow: 0 0 0 7px transparent;
    transform: scale(1.05);
  }

  100% {
    box-shadow: 0 0 0 0 transparent;
    transform: scale(1);
  }
}

body {
  letter-spacing: var(--letter-spacing);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }

  html {
    @apply font-sans;
  }

  pre {
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 5px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }
}`;
