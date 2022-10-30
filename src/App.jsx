import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    // segun el valor anterior, cambio al opuesto (dark ? light o al contrario)
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <Navbar />
      <Header />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
