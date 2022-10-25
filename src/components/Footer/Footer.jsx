import { Col, Container, Nav, Row } from "react-bootstrap";
import "./footer.css";

function Footer({ dark }) {
  return (
    <footer>
      <Container
        fluid
        className={dark ? "text-center bg-light" : "text-center bg-dark"}
      >
        <Row xs={1} className="align-items-center py-2">
          <span></span>
          <Col sm={3}>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link className="fs-2 mb-2 tex-white" href="#home">
                  {"<"}FR{"/>"}{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <small className="text-muted">
              &copy; Flavio Rodriguez, 2022. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
