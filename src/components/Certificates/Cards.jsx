import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import front from "../../assets/img/cursos/Frontend/HA_FRONT_Certificado.png";
import react from "../../assets/img/cursos/Frontend/HA_REACT_CertificadoDeAsistencia_FlavioRodriguez_2022.png";
import backendInicial from "../../assets/img/cursos/Backend/HA_BACK-END_INICIAL_Certificado.png";
import backendAvanzado from "../../assets/img/cursos/Backend/HA_BACK-END_AVANZADO_Certificado.png";

function Cards({ dark }) {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Curso Front-End</Accordion.Header>
        <Accordion.Body className={dark && "bg-dark "}>
          <Row className="">
            <Card className={dark && "text-bg-dark border-light"}>
              <Card.Img variant="top" src={front} />
              <Card.Body>
                <Card.Title>Front-end</Card.Title>
                <Card.Text>
                  Introducción a HTML, CSS (Boostrap) y JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>React & React Native</Accordion.Header>
        <Accordion.Body className={dark && "text-bg-dark"}>
          <Row className="">
            <Card className={dark && "text-bg-dark border-light"}>
              <Card.Img variant="top" src={react} />
              <Card.Body>
                <Card.Title>React & React Native</Card.Title>
                <Card.Text>
                  Desarrollo de aplicaciones web y aplicaciones móviles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Back-end (inicial)</Accordion.Header>
        <Accordion.Body className={dark && "text-bg-dark"}>
          <Row className="">
            <Card className={dark && "text-bg-dark border-light"}>
              <Card.Img variant="top" src={backendInicial} />
              <Card.Body>
                <Card.Title> Back-end (inicial)</Card.Title>
                <Card.Text>
                  JavaScript (ES6+), Node.js, Express y MySQL.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Back-end (avanzado)</Accordion.Header>
        <Accordion.Body className={dark && "text-bg-dark"}>
          <Row className="">
            <Card className={dark && "text-bg-dark border-light"}>
              <Card.Img variant="top" src={backendAvanzado} />
              <Card.Body>
                <Card.Title>Back-end (avanzado)</Card.Title>
                <Card.Text>
                  APIs REST usando Node.js, Express y MongoDB.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Cards;
