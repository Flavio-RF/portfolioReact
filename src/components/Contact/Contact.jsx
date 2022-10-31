import "./contact.css";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
  Card,
} from "react-bootstrap";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import useButtons from "../../hooks/useButtons";

const contacts = [
  {
    id: 0,
    title: "Email",
    subtitle: "flavio.r.f@hotmail.com",
    icon: (
      <a target="__blank" href="mailto:flavio.r.f@hotmail.com">
        <HiOutlineMail className="iconContact" size={40} />
      </a>
    ),
  },
  {
    id: 1,
    title: "Github",
    subtitle: "https://github.com/Flavio-RF",
    icon: (
      <a target="__blank" href="https://github.com/Flavio-RF">
        <FaGithub className="iconContact" size={40} />
      </a>
    ),
  },
  {
    id: 2,
    title: "Linkedin",
    subtitle: "https://www.linkedin.com/in/flavio-rodriguez-1aa233215/",
    icon: (
      <a
        target="__blank"
        href="https://www.linkedin.com/in/flavio-rodriguez-1aa233215/"
      >
        <BsLinkedin size={40} />
      </a>
    ),
  },
];

function Contact() {
  const { dark } = useContext(ThemeContext);
  const { isLoading, send, form, sendEmail } = useButtons();

  const [copied, setCopied] = useState(false);

  return (
    <Container fluid className={dark ? "bg-dark text-white py-5" : "py-5 "}>
      <h5 id="Contact" className="fs-1 text-center py-5  fw-bold ">
        Contacto
      </h5>
      <Row className="justify-content-center mx-md-3">
        <Col xs={7} sm={4} md={3} lg={2} xxl={2} className="mx-5">
          {contacts.map(({ icon, id, subtitle, title }) => {
            return (
              <Card
                className={
                  dark
                    ? "text-center bg-dark my-3 border-light rounded-5"
                    : "text-center my-3 bg-light border-dark rounded-5"
                }
                key={id}
              >
                <Card.Body>
                  {icon}
                  <Card.Title className="my-1">{title}</Card.Title>
                  <Button
                    variant={dark ? "outline-light" : "outline-dark"}
                    size="sm"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        JSON.parse(JSON.stringify(subtitle, null, "")),
                        setCopied(true)
                      )
                    }
                  >
                    Copiar enlace
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <Col xs={10} sm={8} md={6} lg={6} xxl={4} className="mt-5 mx-5">
          <Form ref={form} onSubmit={sendEmail}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className={
                dark ? "mb-3 bg-light text-dark rounded-4" : "mb-3 rounded-4"
              }
            >
              <Form.Control
                className="rounded-4"
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Email"
              className={
                dark ? "mb-3 bg-light text-dark rounded-4" : "mb-3 rounded-4"
              }
            >
              <Form.Control
                className="rounded-4"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Mensaje"
              className={
                dark ? "mb-3 bg-light text-dark rounded-4" : "mb-3 rounded-4"
              }
            >
              <Form.Control
                className="rounded-4"
                as="textarea"
                name="message"
                placeholder="Leave a comment here"
                required
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Button
              type="submit"
              size="lg"
              variant={!send ? "primary" : "success"}
              disabled={isLoading || send}
            >
              {isLoading ? "Enviando..." : !send && "Enviar mensaje"}
              {send && !isLoading && "Mensaje enviado"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
