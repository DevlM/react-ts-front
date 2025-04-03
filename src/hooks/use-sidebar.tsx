"use client";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';

interface SidebarContext {
  visible: {
    left: boolean,
    right: boolean
  },
  leftIsVisible: boolean,
  rightIsVisible: boolean,
  toggleSideBar: (id: ISideBarId) => void;
  closeSideBar: (id: ISideBarId) => void;
}

export type ISideBarId = keyof SidebarContext['visible'];

const SidebarContext = createContext<SidebarContext | null>(null);

export function SidebarProvider({ children }: PropsWithChildren) {
  const [visible, setVisible] = useState<SidebarContext['visible']>({
    right: false,
    left: false
  });

  useEffect(() => {
    const handleOusideClick = (e: MouseEvent) => {
      const sidebars = document.querySelectorAll('[id^="sidebar-"]');
      const clickInNavbar = sidebars.values().some((element) => element.contains(e.target as Node));
      if (!clickInNavbar)
        setVisible((s) => ({ ...s, left: false, right: false }));
    };

    window.addEventListener('mousedown', handleOusideClick);

    return () => window.removeEventListener('mousedown', handleOusideClick);
  }, [visible]);

  const toggleSideBar = useCallback<SidebarContext["toggleSideBar"]>((id) => {
    switch (id) {
      case 'left':
        setVisible({ left: !visible[id], right: false });
        break;
      case 'right':
        setVisible({ right: !visible[id], left: false });
        break;
    }
  }, [visible])

  const value: SidebarContext = {
    visible,
    leftIsVisible: visible['left'],
    rightIsVisible: visible['right'],
    toggleSideBar,
    closeSideBar: (id) => setVisible((s) => ({ ...s, [id]: false }))
  };

  return <SidebarContext value={value}>{children}</SidebarContext>;
}


export default function useSidebar(): SidebarContext {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar need to be in SidebarProvider.");
  return context;
}
