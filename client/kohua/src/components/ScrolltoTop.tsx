import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is very weird...
// This should be a hook or util perhaps, not a component
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
