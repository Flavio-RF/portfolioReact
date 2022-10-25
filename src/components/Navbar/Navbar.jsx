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
import { BsLightbulbFill } from "react-icons/bs";

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
          className="offcanvasCustomLight"
        >
          <Offcanvas.Header closeButton className="ms-auto"></Offcanvas.Header>
          <Offcanvas.Body
            className={
              width >= 768
                ? "ms-auto my-2 me-md-4 my-auto"
                : "d-flex  flex-column"
            }
          >
            <Nav className="text-center">
              <Nav.Link className={width <= 768 && "my-3"} href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className={width <= 768 && "my-3"} href="#About">
                Sobre mi
              </Nav.Link>
              <Nav.Link className={width <= 768 && "my-3"} href="#Certificates">
                Certificados
              </Nav.Link>
              <Nav.Link className={width <= 768 && "my-3"} href="#Projects">
                Proyectos
              </Nav.Link>
              <Nav.Link className={width <= 768 && "my-3"} href="#Contact">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className={width <= 768 ? "text-center my-3" : "ms-md-3"}>
              {dark ? (
                <Button
                  onClick={darkTheme}
                  variant={width <= 768 ? "outline-dark" : "outline-light"}
                >
                  <BsLightbulbFill size={24} />
                </Button>
              ) : (
                <Button onClick={darkTheme} variant="outline-dark">
                  <BsLightbulbFill size={24} style={{ color: "yellow" }} />
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
