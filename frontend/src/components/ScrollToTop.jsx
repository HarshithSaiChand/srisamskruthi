import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the route changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
