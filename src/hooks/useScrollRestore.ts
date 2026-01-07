// src/hooks/useScrollRestore.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestore = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedScrollPos = sessionStorage.getItem(`scrollPos-${pathname}`);
    
    if (savedScrollPos) {
      // 350ms gecikme: Listeleme animasyonlarının büyük oranda tamamlanması için ideal süre.
      const timer = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScrollPos),
          behavior: 'auto' // 'instant' yerine en kararlı ışınlanma budur.
        });
      }, 350); 

      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      // Sadece sayfa aşağıdayken ve render tamken kaydet.
      if (window.scrollY > 0) {
        sessionStorage.setItem(`scrollPos-${pathname}`, window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
};