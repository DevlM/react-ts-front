"use client";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface SidebarContext {
  isVisible: boolean;
  toggleSideBar: () => void;
}

const SidebarContext = createContext<SidebarContext | null>(null);

export function SidebarProvider({ children }: PropsWithChildren) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleOusideClick = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(e.target as Node)) {
        setVisible(false);
      }
    };

    window.addEventListener('mousedown', handleOusideClick);

    return () => window.removeEventListener('mousedown', handleOusideClick);
  }, [isVisible]);

  const value = { isVisible, toggleSideBar: () => setVisible(!isVisible) };

  return <SidebarContext value={value}>{children}</SidebarContext>;
}


export default function useSidebar(): SidebarContext {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar need to be in SidebarProvider.");
  return context;
}
