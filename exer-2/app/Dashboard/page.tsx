import { Suspense } from "react";
import { AnalyticsCards } from "./AnalyticsCards";
import { RecentOrders } from "./RecentOrders";
import { RecentOrdersSkeleton } from "./RecentOrdersSkeleton";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <div>
          <Link href="/Dashboard" className="text-white bg-blue-400 p-4 rounded-md hover:text-blue-700">
            Go to Form
          </Link>
        </div>
      </div>
      <AnalyticsCards />
      <Suspense fallback={<RecentOrdersSkeleton />}>
        <RecentOrders />
      </Suspense>
    </div>
  )
}