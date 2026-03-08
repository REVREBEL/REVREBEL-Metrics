// src/app/workshop/page.tsx
import { RevenueMetric } from "@/components/widgets/RevenueMetric";

export default function WorkshopPage() {
  return (
    <div className="p-10 space-y-12 bg-background min-h-screen">
      <section>
        <h2 className="font-display text-2xl uppercase mb-6 border-b pb-2">
          Widget: Revenue Metric
        </h2>
        {/* Render the widget in isolation with various color variants */}
        <div className="grid grid-cols-3 gap-8">
          <RevenueMetric variant="is-color-1" value={676204} label="Total Revenue" />
          <RevenueMetric variant="is-color-6" value={12540} label="Food & Beverage" />
          <RevenueMetric variant="shadow-primary" value={45000} label="Spa Services" />
        </div>
      </section>
    </div>
  );
}
