"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EarningsInsights } from "@/components/EarningsInsights";
import { EarningLevel } from "@/components/EarningLevel";
import { UserRank } from "@/components/UserRank";
import { TotalEarning } from "@/components/TotalEarning";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171821]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:pl-56">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="p-6 pt-0 space-y-5">
          {/* Welcome Section with Countdown */}
          <div className="flex flex-col bg-[#21222D] rounded-lg px-3 py-1 lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <CountdownTimer />
            </div>
            <div className="flex justify-center lg:justify-end"></div>
          </div>

          {/* Dashboard Grid */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              <EarningsInsights />
              <EarningLevel />
            </div>

            <div className="grid grid-cols-[1fr_2fr] gap-4">
              <UserRank />
              <TotalEarning />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
