import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import CustomToggle from "./Button";

import front from "../../assets/img/cursos/Frontend/HA_FRONT_Certificado.png";
import react from "../../assets/img/cursos/Frontend/HA_REACT_CertificadoDeAsistencia_FlavioRodriguez_2022.png";
import backendInicial from "../../assets/img/cursos/Backend/HA_BACK-END_INICIAL_Certificado.png";
import backendAvanzado from "../../assets/img/cursos/Backend/HA_BACK-END_AVANZADO_Certificado.png";

function Cards({ dark }) {
  return (
    <Accordion flush>
      <Card>
        <Card.Header className={dark ? "card-headerDark" : "card-headerCustom"}>
          <CustomToggle dark={dark} eventKey="0">
            Curso Front-End
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card className={dark && "text-bg-dark border-light"}>
            <Card.Img variant="top" src={front} />
            <Card.Body>
              <Card.Title>Front-end</Card.Title>
              <Card.Text>
                Introducción a HTML, CSS (Boostrap) y JavaScript.
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className={dark ? "card-headerDark" : "card-headerCustom"}>
          <CustomToggle dark={dark} eventKey="1">
            React & React Native
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card className={dark && "text-bg-dark border-light"}>
            <Card.Img variant="top" src={react} />
            <Card.Body>
              <Card.Title>React & React Native</Card.Title>
              <Card.Text>
                Desarrollo de aplicaciones web y aplicaciones móviles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className={dark ? "card-headerDark" : "card-headerCustom"}>
          <CustomToggle dark={dark} eventKey="2">
            Back-end (inicial)
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card className={dark && "text-bg-dark border-light"}>
            <Card.Img variant="top" src={backendInicial} />
            <Card.Body>
              <Card.Title>Back-end (inicial)</Card.Title>
              <Card.Text>
                JavaScript (ES6+), Node.js, Express y MySQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className={dark ? "card-headerDark" : "card-headerCustom"}>
          <CustomToggle dark={dark} eventKey="3">
            Back-end (avanzado)
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card className={dark && "text-bg-dark border-light"}>
            <Card.Img variant="top" src={backendInicial} />
            <Card.Body>
              <Card.Title>Back-end (avanzado)</Card.Title>
              <Card.Text>
                APIs REST usando Node.js, Express y MongoDB.
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Cards;
