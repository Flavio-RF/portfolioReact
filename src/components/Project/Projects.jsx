import { Container, Card, Col, Row, Fade, Button } from "react-bootstrap";
import { useState } from "react";

import Chat from "../../assets/img/Chat.png";
import Notas from "../../assets/img/Notas.png";
import Api from "../../assets/img/API.png";
import "./project.css";
import ButtonSocial from "./ButtonSocial";

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
            <Card.Img variant="top" className="img" src={Chat} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div>Chat</div>
              </Card.Title>
              <div className="d-flex justify-content-between">
                <Button
                  variant={
                    dark
                      ? "outline-light buttonSelectedLight"
                      : "outline-dark buttonSelectedDark"
                  }
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                >
                  Ver mas detalles
                </Button>
                <ButtonSocial />
              </div>
              <Fade in={open}>
                <div id="example-fade-text">
                  Se creeo una aplicacion real-time usando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={!dark && "dark"} className="h-100">
            <Card.Img variant="top" className="img" src={Notas} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div>Notas</div>
              </Card.Title>
              <div className="d-flex justify-content-between">
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
                <ButtonSocial />
              </div>
              <Fade in={open1}>
                <div id="example-fade-text">
                  Se creeo un CRUD de notas utilizando sockets.io, Node.js,
                  Html, Css, JS y MongoDB con Mongoose.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border={!dark && "dark"} className="h-100">
            <Card.Img variant="top" className="img" src={Api} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="d-flex justify-content-around">
                <div>API</div>
              </Card.Title>
              <div className="d-flex justify-content-between">
                <Button
                  variant={
                    dark
                      ? "outline-light buttonSelectedLight"
                      : "outline-dark buttonSelectedDark"
                  }
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-fade-text"
                  aria-expanded={open2}
                >
                  Ver mas detalles
                </Button>
                <ButtonSocial />
              </div>
              <Fade in={open2}>
                <div id="example-fade-text">
                  La idea es poder consumir la API desde Front-end, se trata de
                  solo Back-end con Node.js, Express, MongoDB, Mongoose.
                </div>
              </Fade>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects;
