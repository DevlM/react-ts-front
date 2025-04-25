'use client';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

export type IAppVariant = 'societe' | 'societe2';

interface AppContext {
  variant: IAppVariant;
  setVariant: (v: IAppVariant) => void;
}

const AppContext = createContext<AppContext | null>(null);

export default function useApp(): AppContext {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp need to be in AppProvider.');
  return context;
}

export function AppProvider({ children }: PropsWithChildren) {
  const [variant, setVariant] = useState<IAppVariant>('societe');

  const value: AppContext = {
    variant,
    setVariant,
  };

  return <AppContext value={value}>{children}</AppContext>;
}

export const useEnsureVariant = (variant: IAppVariant) => {
  const { variant: currentVariant, setVariant } = useApp();
  useEffect(() => {
    if (currentVariant !== variant) setVariant(variant);
  }, [variant, setVariant, currentVariant]);
};
