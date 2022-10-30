import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => {
    setDark((prev) => !prev);
    // segunel valor anterior, cambio al opuesto (dark ? light o al contrario)
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
