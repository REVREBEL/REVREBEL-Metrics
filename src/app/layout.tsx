// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Khand, Funnel_Sans} from "next/font/google";

const funnelSans = Funnel_Sans({subsets:['latin'],variable:'--font-sans'});

const khand = Khand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-khand",
});

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(
      khand.variable, 
      "antialiased",
      funnelSans.variable, 
      "antialiased",
    )}>
      {/* Apply funnelSans as the base font. 
          Khand (display) will be used via the 'font-display' class.
      */}
      <body className="font-funnel bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
