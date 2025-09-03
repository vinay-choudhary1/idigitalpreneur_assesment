'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const rankings = [
  {
    name: 'Taniya Patyal',
    rank: '#6986',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'Piyush Patyal',
    rank: '#6987',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    isCurrentUser: true
  },
  {
    name: 'Uttkarsh Singh',
    rank: '#6988',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export function UserRank() {
  return (
    <Card className="bg-[#21222D] p-4 w-full">
      <CardHeader>
        <CardTitle className="text-white">Your Rank</CardTitle>
        <p className="text-slate-400 text-sm pt-1">Among other affiliates</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-[#A9DFD8] my-2">#6987</h3>
        </div>
        
        <div className="">
          {rankings.map((user, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                user.isCurrentUser 
                  ? ' ' 
                  : ''
              }`}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-[#171821] text-slate-300">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <p className={`font-medium ${user.isCurrentUser ? 'text-white' : 'text-white'}`}>
                  {user.name}
                </p>
              </div>
              
              <div className={`font-semibold ${user.isCurrentUser ? 'text-white text-xl' : 'text-slate-400'}`}>
                {user.rank}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}