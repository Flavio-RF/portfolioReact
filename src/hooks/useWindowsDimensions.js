import { useEffect, useState } from "react";

export default function useWindowsDimensions() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleNavigation = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleNavigation);

    return () => {
      window.removeEventListener("resize", handleNavigation);
    };
  }, [handleNavigation]);

  return { width };
}
