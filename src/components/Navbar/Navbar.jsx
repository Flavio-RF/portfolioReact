import "./navbar.css";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsFillMoonFill } from "react-icons/bs";
import { GrSolaris } from "react-icons/gr";

function Navegation({ dark, darkTheme }) {
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

  return (
    <Navbar
      className={(y < 300) & (width > 768) & dark && "bg-transparent"}
      fixed="top"
      variant={dark && "dark"}
      bg={dark ? "dark" : "light"}
      expand="md"
    >
      <Container>
        <Navbar.Brand className="fw-bold fs-5" href="#">
          {"<"} FR {"/>"}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto my-2 me-md-4 my-sm-0">
            <Nav.Link className="text-center" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-center" href="#About">
              About
            </Nav.Link>
            <Nav.Link className="text-center" href="#Certificates">
              Certificates
            </Nav.Link>
            <Nav.Link className="text-center" href="#Projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-center" href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center">
            {dark ? (
              <Button onClick={darkTheme} variant="outline-light">
                <BsFillMoonFill />
              </Button>
            ) : (
              <Button onClick={darkTheme} variant="outline-dark">
                <GrSolaris />
              </Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegation;
