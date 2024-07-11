import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // 當路由變化時，將頁面滾動到最頂部

  return null;
}

export default ScrollToTop;
