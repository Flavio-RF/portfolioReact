import "./header.css";
import bg from "../../assets/img/bg.webp";
import bgResponsive from "../../assets/img/bg_responsive.webp";
import profile from "../../assets/img/profile.jpeg";
import { useState, useEffect } from "react";

function Header() {
  const [width, setWidth] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    setWidth({ dynamicWidth: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, []);

  return (
    <header id="home" className="home" style={{ backgroundColor: "#000000cc" }}>
      <img
        className="home__background"
        src={width.dynamicWidth >= 780 ? bg : bgResponsive}
        alt="backgroundImg"
      />

      <div id="sectionHome">
        <div className="picture d-flex justify-content-center mb-3">
          <img
            className="home__profile"
            id="pic"
            src={profile}
            alt="picture profile"
          />
        </div>
        <div className="home__description d-flex flex-column align-items-center">
          <span
            className={
              width.dynamicWidth > 500 ? "home__title " : "fs-1 text-primary"
            }
          >
            Flavio Rodriguez
          </span>
          <span
            className={
              width.dynamicWidth > 500 ? "home__title--secondary" : "fs-2 text-white"
            }
          >
            Full Stack Developer
          </span>
        </div>
      </div>
    </header>
  );
}
export default Header;
