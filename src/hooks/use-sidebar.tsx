"use client";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';

interface SidebarContext {
  visible: {
    left: boolean,
    right: boolean
  },
  leftIsVisible: boolean,
  rightIsVisible: boolean,
  variant?: "strillherezh" | "skornenn"
  toggleSideBar: (id: ISideBarId, variant?: ISideBarVariant) => void;
  closeSideBar: (id: ISideBarId) => void;
}

export type ISideBarId = keyof SidebarContext['visible'];
export type ISideBarVariant = SidebarContext['variant'];

const SidebarContext = createContext<SidebarContext | null>(null);

export function SidebarProvider({ children }: PropsWithChildren) {
  const [variant, setVariant] = useState<ISideBarVariant>();
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
      // sidebars.forEach((sidebar) => {
      //   const sideBarId = sidebar.id.split('-')[1] as ISideBarId;
      //   const isActive = visible[sideBarId]
      //   if (sidebar && !clickInNavbar && !sidebar.contains(e.target as Node)) {
      //     console.log('ouside close')
      //     setVisible((s) => ({ ...s, left: false, right: false }));
      //   }
      // });
    };

    window.addEventListener('mousedown', handleOusideClick);

    return () => window.removeEventListener('mousedown', handleOusideClick);
  }, [visible]);

  const toggleSideBar = useCallback<SidebarContext["toggleSideBar"]>((id, variant) => {
    switch (id) {
      case 'left':
        setVisible({ left: !visible[id], right: false });
        break;
      case 'right':
        setVisible({ right: !visible[id], left: false });
        break;
    }
    setVariant(variant);
  }, [visible])

  const value: SidebarContext = {
    visible,
    leftIsVisible: visible['left'],
    rightIsVisible: visible['right'],
    toggleSideBar,
    variant,
    closeSideBar: (id) => setVisible((s) => ({ ...s, [id]: false }))
  };

  return <SidebarContext value={value}>{children}</SidebarContext>;
}


export default function useSidebar(): SidebarContext {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar need to be in SidebarProvider.");
  return context;
}
