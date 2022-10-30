import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import {
  Container,
  Offcanvas,
  Button,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import { BsLightbulbFill } from "react-icons/bs";
import { ThemeContext } from "../../App";
import useWindowsDimensions from "../../hooks/useWindowsDimensions";

function Navegation() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  const { width } = useWindowsDimensions();

  return (
    <Navbar
      className={dark ? "bg-DarkCustom" : "bg-LightCustom"}
      fixed="top"
      expand="md"
    >
      <Container>
        <Navbar.Brand
          className={!dark ? "fw-bold fs-4" : "fw-bold fs-4 text-white"}
          href="#"
        >
          {"<"} <span className="text-primary">FR</span> {"/>"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          className="offcanvasCustomLight"
          scroll="true"
        >
          <Offcanvas.Header closeButton className="ms-auto"></Offcanvas.Header>
          <Offcanvas.Body
            className={
              width >= 765
                ? "ms-auto my-2 me-md-4 my-auto"
                : "d-flex  flex-column"
            }
          >
            <Nav className="text-center">
              <Nav.Link className={width <= 765 && "my-3"} href="#home">
                Inicio
              </Nav.Link>
              <Nav.Link className={width <= 765 && "my-3"} href="#About">
                Sobre mi
              </Nav.Link>
              <Nav.Link className={width <= 765 && "my-3"} href="#Certificates">
                Certificados
              </Nav.Link>
              <Nav.Link className={width <= 765 && "my-3"} href="#Projects">
                Proyectos
              </Nav.Link>
              <Nav.Link className={width <= 765 && "my-3"} href="#Contact">
                Contacto
              </Nav.Link>
            </Nav>
            <Form className={width <= 765 ? "text-center my-3" : "ms-md-3"}>
              {dark ? (
                <Button
                  onClick={toggleTheme}
                  variant={width <= 765 ? "outline-dark" : "outline-light"}
                >
                  <BsLightbulbFill size={20} />
                </Button>
              ) : (
                <Button onClick={toggleTheme} variant="outline-dark">
                  <BsLightbulbFill size={20} style={{ color: "yellow" }} />
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
