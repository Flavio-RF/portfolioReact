import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [dark, setDark] = useState(true);
  const darkTheme = () => {
    !dark ? setDark(true) : setDark(false);
  };
  return (
    <>
      <Navbar setDatk={setDark} dark={dark} darkTheme={darkTheme} />
      <Header />
      <About dark={dark} />
      <Certificates dark={dark} />
      <Projects dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

export default App;
