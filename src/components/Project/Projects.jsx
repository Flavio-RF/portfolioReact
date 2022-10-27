import { Container, Card, Col, Row, Collapse, Button } from "react-bootstrap";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Chat from "../../assets/img/chat.png";
import Notas from "../../assets/img/notas.png";
import Api from "../../assets/img/api.png";
import "./project.css";

function Projects({ dark }) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <Container fluid className={dark ? "bg-dark text-white py-5" : "py-5"}>
      <hr />
      <h4 id="Projects" className="fs-1 fw-bold text-center py-5 mb-5">
        Mis proyectos personales
      </h4>
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        className="g-4 mx-md-3 justify-content-center"
      >
        <Col>
          <Card border={!dark && "dark"} className="h-100">
            <Card.Img variant="top" className="img" src={Chat} alt="Chat" />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div className="fs-3 mb-2">Chat</div>
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant={
                    dark
                      ? "outline-light buttonSelectedLight"
                      : "outline-dark buttonSelectedDark"
                  }
                  onClick={() => setOpen(!open)}
                  aria-controls="example-Collapse-text"
                  aria-expanded={open}
                >
                  Ver mas detalles
                </Button>
                <div>
                  <Card.Link
                    href="https://github.com/Flavio-RF/Chat"
                    target="_blank"
                  >
                    <FaGithub className="buttonSocial" size={30} />
                  </Card.Link>
                  <Card.Link
                    href="https://app-firstchattest.herokuapp.com/"
                    target="_blank"
                  >
                    <TbWorld className="buttonSocial" size={30} />
                  </Card.Link>
                </div>
              </div>
              <Collapse className="mt-2" in={open}>
                <div id="example-Collapse-text">
                  Se creeo una aplicacion real-time usando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={!dark && "dark"} className="h-100">
            <Card.Img variant="top" className="img" src={Notas} alt="Notas" />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div className="fs-3 mb-2">Notas</div>
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant={
                    dark
                      ? "outline-light buttonSelectedLight"
                      : "outline-dark buttonSelectedDark"
                  }
                  onClick={() => setOpen1(!open1)}
                  aria-controls="example-fade-text"
                  aria-expanded={open1}
                >
                  Ver mas detalles
                </Button>
                <div>
                  <Card.Link
                    href="https://github.com/Flavio-RF/notes"
                    target="_blank"
                  >
                    <FaGithub className="buttonSocial" size={30} />
                  </Card.Link>
                  <Card.Link
                    href="https://socket-crud-notas.herokuapp.com/"
                    target="_blank"
                  >
                    <TbWorld className="buttonSocial" size={30} />
                  </Card.Link>
                </div>
              </div>
              <Collapse className="mt-2" in={open1}>
                <div id="example-Collapse-text">
                  Se creeo un CRUD de notas utilizando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={!dark && "dark"} className="h-100">
            <Card.Img variant="top" className="img" src={Api} alt="api" />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div className="fs-3 mb-2">API</div>
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  variant={
                    dark
                      ? "outline-light buttonSelectedLight"
                      : "outline-dark buttonSelectedDark"
                  }
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-Collapse-text"
                  aria-expanded={open2}
                >
                  Ver mas detalles
                </Button>
                <div>
                  <Card.Link
                    href="https://github.com/Flavio-RF/ProyectoFinal-Backend-avanzado"
                    target="_blank"
                  >
                    <FaGithub className="buttonSocial" size={30} />
                  </Card.Link>
                  <Card.Link
                    href="https://proyecto-final-backend-avanzado.vercel.app/"
                    target="_blank"
                  >
                    <TbWorld className="buttonSocial" size={30} />
                  </Card.Link>
                </div>
              </div>
              <Collapse className="mt-2" in={open2}>
                <div id="example-Collapse-text ">
                  Es un proyecto backend que se debe consumir desde Front-end,
                  se desarrollo utilizando Node.js, Express, MongoDB, Mongoose.
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects;
