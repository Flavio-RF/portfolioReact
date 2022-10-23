import { Col, Container, Nav, Row } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Container
        style={{ minHeight: "5rem" }}
        fluid
        className="text-center bg-dark"
      >
        <Row xs={1} className="align-items-center py-5">
          <Col className="fs-2 mb-2" sm={3}>
            <a href="#">
              {"<"}FR{"/>"}{" "}
            </a>
          </Col>
          <Col sm={8}>
            <Nav
              variant="pills"
              className="justify-content-center"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="#">Inicio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="#About">
                  Sobre mi
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" href="#Certificates">
                  Certficiados
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" href="#Projects">
                  Proyectos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" href="#Contact">
                  Contacto
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
