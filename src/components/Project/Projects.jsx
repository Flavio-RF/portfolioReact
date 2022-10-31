import { Container, Card, Col, Row, Collapse, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Chat from "../../assets/img/projects/chat.jpeg";
import Notas from "../../assets/img/projects/notas.jpeg";
import Api from "../../assets/img/projects/api.jpeg";
import "./project.css";
import { ThemeContext } from "../../App";

function Projects() {
  const { dark } = useContext(ThemeContext);

  const [openProjectChat, setOpenProjectChat] = useState(false);
  const [openProjectNotas, setOpenProjectNotas] = useState(false);
  const [openProjectApi, setOpenProjectApi] = useState(false);

  return (
    <Container fluid className={dark ? "bg-dark text-white p-5" : "p-5"}>
      <h4 id="Projects" className="fs-1 fw-bold text-center py-5 mb-5">
        Mis proyectos personales
      </h4>
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        className="g-4 mx-md-3 justify-content-center "
      >
        <Col xxl={3}>
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
                  onClick={() => setOpenProjectChat(!openProjectChat)}
                  aria-controls="example-Collapse-text"
                  aria-expanded={openProjectChat}
                >
                  Ver mas detalles
                </Button>
                <div className="d-flex ms-3">
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
              <Collapse className="mt-2" in={openProjectChat}>
                <div id="example-Collapse-text">
                  Se creeo una aplicacion real-time usando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
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
                  onClick={() => setOpenProjectNotas(!openProjectNotas)}
                  aria-controls="example-fade-text"
                  aria-expanded={openProjectNotas}
                >
                  Ver mas detalles
                </Button>
                <div className="d-flex ms-3">
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
              <Collapse className="mt-2" in={openProjectNotas}>
                <div id="example-Collapse-text">
                  Se creeo un CRUD de notas utilizando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
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
                  onClick={() => setOpenProjectApi(!openProjectApi)}
                  aria-controls="example-Collapse-text"
                  aria-expanded={openProjectApi}
                >
                  Ver mas detalles
                </Button>
                <div className="d-flex ms-3">
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
              <Collapse className="mt-2" in={openProjectApi}>
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
