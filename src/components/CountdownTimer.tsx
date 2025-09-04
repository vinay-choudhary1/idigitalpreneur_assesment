'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 11,
    minutes: 59,
    seconds: 9
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-8 relative">
      <div className="flex items-center gap-2 text-white">
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-xs text-white ">Days</span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs text-white ">Hr</span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs text-white ">Min</span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs text-white ">Sec</span>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm">
        Your <span className="text-[#A9DFD8]">next</span> level is just <span className="text-[#A9DFD8]">one click away...</span> 
      </p>
      <Image src="/rocket.svg" alt="Next Level" width={50} height={50} className='absolute -right-56 bottom-0 z-10'/>
    </div>
  );
}