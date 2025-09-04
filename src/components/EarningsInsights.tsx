"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, CreditCard, Calendar, Clock } from "lucide-react";

const metrics = [
  {
    title: "₹ 51,060",
    subtitle: "All Time",
    change: "+10% from yesterday",
    changeColor: "text-orange-400",
    icon: TrendingUp,
    iconBg: "bg-orange-900/20",
    iconColor: "text-orange-400",
  },
  {
    title: "₹ 21,340",
    subtitle: "All time paid",
    change: "+8% from yesterday",
    changeColor: "text-green-400",
    icon: CreditCard,
    iconBg: "bg-green-900/20",
    iconColor: "text-green-400",
  },
  {
    title: "₹ 10,162",
    subtitle: "In last 30 Days",
    change: "+2% from yesterday",
    changeColor: "text-blue-400",
    icon: Calendar,
    iconBg: "bg-blue-900/20",
    iconColor: "text-blue-400",
  },
  {
    title: "₹ 3,890",
    subtitle: "In last 7 Days",
    change: "+3% from yesterday",
    changeColor: "text-teal-400",
    icon: Clock,
    iconBg: "bg-[#A9DFD8]/20",
    iconColor: "text-teal-400",
  },
];

export function EarningsInsights() {
  return (
    <div className="space-y-4 bg-[#21222D] rounded-lg p-4 w-full card">
      <div>
        <h2 className="text-xl font-semibold text-white">Earnings Insights</h2>
        <p className="text-slate-400 text-sm">Performance Summary</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="bg-[#171821] "
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${metric.iconBg}`}>
                  <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{metric.title}</p>
                <p className="text-slate-400 text-sm">{metric.subtitle}</p>
                <p className={`text-xs ${metric.changeColor}`}>
                  {metric.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
