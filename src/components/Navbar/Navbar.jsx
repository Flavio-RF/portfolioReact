import "./navbar.css";
import { useEffect, useState } from "react";
import {
  Container,
  Offcanvas,
  Button,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
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
      className={dark ? "bg-DarkCustom" : "bg-LightCustom"}
      fixed="top"
      expand="md"
    >
      <Container>
        <Navbar.Brand className="fw-bold fs-3 text-white" href="#">
          {"<"} <span className="text-primary">FR</span> {"/>"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="ms-auto my-2 me-md-4 my-auto">
            <Nav>
              <Nav.Link className="text-center" href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className="text-center" href="#About">
                Sobre mi
              </Nav.Link>
              <Nav.Link className="text-center" href="#Certificates">
                Certificados
              </Nav.Link>
              <Nav.Link className="text-center" href="#Projects">
                Proyectos
              </Nav.Link>
              <Nav.Link className="text-center" href="#Contact">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className="ms-md-3">
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navegation;
