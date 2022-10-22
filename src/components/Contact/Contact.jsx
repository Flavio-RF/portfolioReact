import "./contact.css";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
} from "react-bootstrap";

function Contact({ dark }) {
  return (
    <Container fluid className={dark ? "bg-dark text-white py-5" : "py-5"}>
      <h5 id="Contact" className="fs-1 text-center py-5  fw-bold ">
        Contacto
      </h5>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6}>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3 text-dark"
            >
              <Form.Control type="text" placeholder="Nombre" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Correo"
              className="mb-3 text-dark"
            >
              <Form.Control type="email" placeholder="Email" required />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Mensaje"
              className="mb-3 text-dark"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                required
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button size="lg">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
