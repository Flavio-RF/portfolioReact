import { useEffect, useState } from "react";

export default function useWindowsDimensions() {
  const [y, setY] = useState(window.scrollY);
  const [width, setWidth] = useState(window.innerWidth);

  const handleNavigation = () => {
    setY(window.scrollY);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    window.addEventListener("resize", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
      window.removeEventListener("resize", handleNavigation);
    };
  }, [handleNavigation]);

  return { width };
}
