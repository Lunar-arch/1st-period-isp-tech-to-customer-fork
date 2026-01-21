"use client";

import Sidebar from "@/components/layout/Sidebar";
import { SidebarItemParams } from "@/app/types/types";
import { Calendar, Headset, History, Home as HomeIcon, Settings, Wrench, BarChart3, PanelLeft, X } from "lucide-react";
import { useState } from "react";

const sidebarItems: SidebarItemParams[] = [
  { id: 1, title: "Home", icon: HomeIcon },
  { id: 2, title: "Settings", icon: Settings },
  { id: 3, title: "Statistics", icon: BarChart3 },
  { id: 4, title: "Work History", icon: History },
  { id: 5, title: "Calendar", icon: Calendar },
  { id: 6, title: "Tools", icon: Wrench },
  { id : 7, title: "Dispatch", icon: Headset },

];

export default function Home() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-30 grid h-10 w-10 place-items-center rounded-md bg-background-secondary/70 text-text-main shadow-md transition-colors duration-200 hover:bg-background-secondary/90 md:hidden"
        onClick={() => setIsMobileSidebarOpen((open) => !open)}
        aria-label={isMobileSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isMobileSidebarOpen ? <X className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
      </button>
      <main className="bg-background-main text-text-main w-full min-h-screen px-6 py-8">
        jj
      </main>
      <Sidebar title="Tech to Customer" items={sidebarItems} isOpen={isMobileSidebarOpen} autoCollapse />
    </>
  );
}
