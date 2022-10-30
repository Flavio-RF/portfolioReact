import { useContext } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { ThemeContext } from "../../App";
import "./footer.css";

function Footer() {
  const { dark } = useContext(ThemeContext);

  return (
    <footer>
      <Container
        fluid
        className={dark ? "text-center bg-light" : "text-center bg-dark"}
      >
        <Row xs={1} className="align-items-center">
          <span></span>
          <Col sm={3}>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link className="fs-3  " href="#home">
                  {"<"} <span className="text-primary">FR</span> {"/>"}
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
