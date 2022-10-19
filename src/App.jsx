import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const darkTheme = () => {
    !dark ? setDark(true) : setDark(false);
  };
  return (
    <>
      <Navbar setDatk={setDark} dark={dark} darkTheme={darkTheme} />
      <Header />
      <About dark={dark} />
      <Certificates dark={dark} />
      <Project dark={dark} />
      <Contact dark={dark} />
    </>
  );
}

export default App;
