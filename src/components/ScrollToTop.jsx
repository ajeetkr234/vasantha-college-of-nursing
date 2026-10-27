import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  // Ensure refresh, beforeunload, and pageshow (bfcache) always start at top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleReset = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleReset);
    window.addEventListener('pageshow', handleReset);
    window.addEventListener('load', handleReset);

    return () => {
      window.removeEventListener('beforeunload', handleReset);
      window.removeEventListener('pageshow', handleReset);
      window.removeEventListener('load', handleReset);
    };
  }, []);

  return null;
}
