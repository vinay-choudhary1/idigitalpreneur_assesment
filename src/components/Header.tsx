"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, Bell, ChevronDown } from "lucide-react";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-20 shrink-0 items-center gap-x-4  bg-[#171821]/80 backdrop-blur-sm px-4 shadow-sm lg:gap-x-6 lg:px-6">
      <Button
        variant="ghost"
        size="sm"
        className="text-slate-400  lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
        <div className="flex flex-1">
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Hello, <span className="text-[#A9DFD8]">Piyush Patyal</span> 👋
          </h1>
        </div>
        <div className="flex items-center ">
          {/* Notifications */}
          <Button
            variant="default"
            size="sm"
            className="text-slate-400  relative"
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-2 right-3 h-2 w-2 bg-[#FC013C] rounded-full flex items-center justify-center text-xs font-medium text-white"></span>
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                className="flex items-center gap-2 text-slate-400 "
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-[#171821] border-slate-700"
            >
              <DropdownMenuItem className="text-slate-300 ">
                Edit Your Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-slate-300 ">
                Back to Dashboard
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#171821]" />
              <DropdownMenuItem className="text-slate-300 ">
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
