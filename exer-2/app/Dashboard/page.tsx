import { Suspense } from "react";
import { AnalyticsCards } from "./AnalyticsCards";
import { RecentOrders } from "./RecentOrders";
import { RecentOrdersSkeleton } from "./RecentOrdersSkeleton";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <AnalyticsCards />
      <Suspense fallback={<RecentOrdersSkeleton />}>
        <RecentOrders />
      </Suspense>
    </div>
  );
}