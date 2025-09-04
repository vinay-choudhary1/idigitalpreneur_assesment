'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 120 },
  { month: 'Feb', revenue: 180 },
  { month: 'Mar', revenue: 320 },
  { month: 'Apr', revenue: 280 },
  { month: 'May', revenue: 380 },
  { month: 'Jun', revenue: 480 },
  { month: 'Jul', revenue: 420 },
  { month: 'Aug', revenue: 460 },
  { month: 'Sep', revenue: 380 },
  { month: 'Oct', revenue: 280 },
  { month: 'Nov', revenue: 320 },
  { month: 'Dec', revenue: 280 }
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#171821] p-3 rounded-lg border border-slate-700 shadow-lg">
        <p className="text-slate-400 text-sm">{label}</p>
        <p className="text-[#A9DFD8] font-semibold">
          ₹{payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export function TotalEarning() {
  return (
    <Card className="bg-[#21222D] p-4 w-full card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-white">Total Earning</CardTitle>
        <div className="flex items-center gap-2 bg-[#171821] rounded-md p-1 px-2">
          <div className="w-2 h-2 bg-[#FCB85A] rounded-full"></div>
          <span className="text-white text-sm">Revenue</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: 'white' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: 'white' }}
                domain={[0, 500]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#A9DFD8" 
                strokeWidth={2}
                fill="url(#colorRevenue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}