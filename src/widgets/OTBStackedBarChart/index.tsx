"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, ReferenceArea, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Custom Tooltip Component to match your mockups
const OTBMixTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;

  // Determine if we are showing a specific day or month summary
  // In a real app, this state would be toggled by the cursor position
  const isDayView = payload.length > 0 && label.length === 2;

  return (
    <div className="card shadow-primary p-6 bg-background border-2 border-primary min-w-[300px]">
      <h3 className="font-display text-3xl uppercase text-primary mb-4">
        {isDayView ? `SATURDAY, JUNE ${label}` : "JUNE 1 - JUNE 30"}
      </h3>

      <div className="flex gap-8 mb-6">
        {isDayView ? (
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs uppercase text-muted-foreground">Weekend</span>
            <div className="flex items-center gap-4">
               <div className="w-2 h-8 bg-[var(--chart-5)]" /> {/* Transient */}
               <div className="font-sans text-lg font-bold">45 / 93% <span className="text-sm font-normal text-muted-foreground">Transient</span></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-2 h-4 bg-[var(--chart-7)]" /> {/* Group */}
               <div className="font-sans text-lg font-bold">3 / 7% <span className="text-sm font-normal text-muted-foreground">Group</span></div>
            </div>
          </div>
        ) : (
          /* Month Summary View matching Screenshot 5.09.06 PM */
          <div className="flex justify-between w-full">
            <div>
              <span className="font-display text-xs uppercase">Total</span>
              <p className="font-sans font-bold">78 / 85% <span className="text-xs font-normal">Transient</span></p>
              <p className="font-sans font-bold">13 / 14% <span className="text-xs font-normal">Group</span></p>
            </div>
            <div>
              <span className="font-display text-xs uppercase text-[var(--chart-1)]">Weekday</span>
              {/* Add Weekday specific metrics here */}
            </div>
            <div>
              <span className="font-display text-xs uppercase text-[var(--chart-6)]">Weekend</span>
              {/* Add Weekend specific metrics here */}
            </div>
          </div>
        )}
      </div>
      
      <div className="w-full border-t border-primary pt-2">
        <p className="font-display text-2xl uppercase tracking-tighter">OTB/% Mix Rooms By Day</p>
      </div>
    </div>
  );
};

export default function OTBChart() {
  // Use your provided OKLCH variables
  return (
    <Card className="card shadow-primary p-8 bg-background border-2 border-primary overflow-hidden">
      {/* ... Header with Capacity line remains the same ... */}
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            {/* Weekend Shading */}
            {chartData.map((d, i) => d.isWeekend && (
              <ReferenceArea key={i} x1={d.day} x2={d.day} fill="oklch(96% 0 0deg)" fillOpacity={0.4} />
            ))}

            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: 14 }} 
            />

            {/* The Integrated Tooltip */}
            <Tooltip content={<OTBMixTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar dataKey="transient" stackId="a" fill="var(--chart-3)" />
            <Bar dataKey="group" stackId="a" fill="var(--chart-6)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
