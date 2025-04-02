import { useState, useEffect } from 'react';

export default function useNavbar(props?: { fixed?: boolean }) {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    if (props?.fixed) {
      setNavbarVisible(true);
      return;
    }
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        // Scroll vers le bas
        setNavbarVisible(false);
      } else {
        // Scroll vers le haut
        setNavbarVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll, props?.fixed]);

  return { isNavbarVisible };
}
