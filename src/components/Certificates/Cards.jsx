import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CustomToggle from "./Button";

// ==================IMG==================

import front from "../../assets/img/cursos/Frontend/HA_FRONT_Certificado.png";
import react from "../../assets/img/cursos/Frontend/HA_REACT_CertificadoDeAsistencia_FlavioRodriguez_2022.png";
import backendInicial from "../../assets/img/cursos/Backend/HA_BACK-END_INICIAL_Certificado.png";
import backendAvanzado from "../../assets/img/cursos/Backend/HA_BACK-END_AVANZADO_Certificado.png";

// ==================PDF==================
import frontPdf from "../../assets/img/cursos/Frontend/HA_FRONT_Certificado.pdf";
import reactPdf from "../../assets/img/cursos/Frontend/HA_REACT_Certificado.pdf";
import backendInicialPdf from "../../assets/img/cursos/Backend/HA_BACK-END_INICIAL_Certificado.pdf";
import backendAvanzadoPdf from "../../assets/img/cursos/Backend/HA_BACK-END_AVANZADO_Certificado.pdf";

function Cards({ dark }) {
  return (
    <Accordion>
      <Card>
        <Card.Header className={dark ? "card-headerDark" : "card-headerCustom"}>
          <CustomToggle dark={dark} eventKey="0">
            Curso Front-End
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card>
            <Card.Img variant="top" src={front} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title>Front-end</Card.Title>
              <Card.Text>
                Introducción a HTML, CSS (Boostrap) y JavaScript.
              </Card.Text>
              {dark ? (
                <a href={frontPdf} className="btn btn-outline-light" download>
                  Descargar PDF
                </a>
              ) : (
                <a href={frontPdf} className="btn btn-outline-dark" download>
                  Descargar PDF
                </a>
              )}
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
          <Card>
            <Card.Img variant="top" src={react} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title>React & React Native</Card.Title>
              <Card.Text>
                Desarrollo de aplicaciones web y aplicaciones móviles.
              </Card.Text>
              {dark ? (
                <a href={reactPdf} className="btn btn-outline-light" download>
                  Descargar PDF
                </a>
              ) : (
                <a href={reactPdf} className="btn btn-outline-dark" download>
                  Descargar PDF
                </a>
              )}
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
          <Card>
            <Card.Img variant="top" src={backendInicial} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title>Back-end (inicial)</Card.Title>
              <Card.Text>
                JavaScript (ES6+), Node.js, Express y MySQL.
              </Card.Text>
              {dark ? (
                <a
                  href={backendInicialPdf}
                  className="btn btn-outline-light"
                  download
                >
                  Descargar PDF
                </a>
              ) : (
                <a
                  href={backendInicialPdf}
                  className="btn btn-outline-dark"
                  download
                >
                  Descargar PDF
                </a>
              )}
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
          <Card>
            <Card.Img variant="top" src={backendAvanzado} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title>Back-end (avanzado)</Card.Title>
              <Card.Text>
                APIs REST usando Node.js, Express y MongoDB.
              </Card.Text>
              {dark ? (
                <a
                  href={backendAvanzadoPdf}
                  className="btn btn-outline-light"
                  download
                >
                  Descargar PDF
                </a>
              ) : (
                <a
                  href={backendAvanzadoPdf}
                  className="btn btn-outline-dark"
                  download
                >
                  Descargar PDF
                </a>
              )}
            </Card.Body>
          </Card>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Cards;
