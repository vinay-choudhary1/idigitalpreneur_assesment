'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const weeklyData = [
  { day: 'M', amount: 2800 },
  { day: 'T', amount: 3200 },
  { day: 'W', amount: 2900 },
  { day: 'T', amount: 2600 },
  { day: 'F', amount: 3400 },
  { day: 'S', amount: 3600 },
  { day: 'S', amount: 3100 }
];

export function EarningLevel() {
  return (
    <Card className="bg-[#21222D] p-4 w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-white">Earning Level</CardTitle>
        <Select defaultValue="weekly">
          <SelectTrigger className="w-24 bg-[#171821] ">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#171821] ">
            <SelectItem value="weekly" className="text-slate-300">Weekly</SelectItem>
            <SelectItem value="monthly" className="text-slate-300">Monthly</SelectItem>
            <SelectItem value="yearly" className="text-slate-300">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      
      <CardContent className="pt-4">
       
        
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#A9DFD8' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="amount" 
                fill="#A9DFD8" 
                barSize={20}
                radius={[5, 5, 0, 0]}
                className="hover:opacity-80 transition-opacity"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}