"use client";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  TrendingUp, 
  Layers, 
  Wrench, 
  GraduationCap, 
  Shield, 
  Link, 
  Info, 
  Star, 
  Gift, 
  X 
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Earnings", href: "#", icon: TrendingUp, current: false },
  { name: "Tiers", href: "#", icon: Layers, current: false },
  { name: "M-Tools", href: "#", icon: Wrench, current: false },
  { name: "Trainings", href: "#", icon: GraduationCap, current: false },
  { name: "KYC", href: "#", icon: Shield, current: false },
  { name: "LeadLink", href: "#", icon: Link, current: false },
  { name: "RefInfo", href: "#", icon: Info, current: false },
  { name: "Qualify", href: "#", icon: Star, current: false },
  { name: "Rewards", href: "#", icon: Gift, current: false },
];

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-[#171821]/80" />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-50 flex w-56 flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#171821] border-r border-slate-700/50 pr-6 pb-4">
          <div className="flex h-16 shrink-0 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-lg">Razorpay</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`group flex gap-x-3 rounded-lg rounded-l-none py-3 pl-9 text-sm font-medium transition-all duration-200 ${
                      item.current
                        ? "bg-[#A9DFD8] text-black"
                        : "text-slate-400 hover:text-white hover:bg-[#171821]/50"
                    }`}
                  >
                    <item.icon
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        item.current
                          ? "text-black fill-black"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
