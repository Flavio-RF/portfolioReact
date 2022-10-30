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
import { ThemeContext } from "../../App";
import { useContext } from "react";

const certificates = [
  {
    id: 0,
    cardTitle: "Front-end",
    cardText: "Introducción a HTML, CSS (Boostrap) y JavaScript.",
    certificatePng: front,
    certificatePdf: frontPdf,
  },
  {
    id: 1,
    cardTitle: "React & React Native",
    cardText: "Desarrollo de aplicaciones web y aplicaciones móviles.",
    certificatePng: react,
    certificatePdf: reactPdf,
  },
  {
    id: 2,
    cardTitle: "Back-end (inicial)",
    cardText: "JavaScript (ES6+), Node.js, Express y MySQL.",
    certificatePng: backendInicial,
    certificatePdf: backendInicialPdf,
  },
  {
    id: 3,
    cardTitle: "Back-end (avanzado)",
    cardText: "APIs REST usando Node.js, Express y MongoDB.",
    certificatePng: backendAvanzado,
    certificatePdf: backendAvanzadoPdf,
  },
];

function Cards() {
  const { dark } = useContext(ThemeContext);

  return (
    <Accordion>
      {certificates.map(
        ({ id, cardTitle, cardText, certificatePng, certificatePdf }) => {
          return (
            <Card key={id}>
              <Card.Header
                className={dark ? "card-headerDark" : "card-headerCustom"}
              >
                <CustomToggle dark={dark} eventKey={id}>
                  {cardTitle}
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={id}>
                <Card>
                  <Card.Img variant="top" src={certificatePng} />
                  <Card.Body className={dark && "bg-darkCustom"}>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Text>{cardText}</Card.Text>
                    {dark ? (
                      <a
                        href={certificatePdf}
                        className="btn btn-outline-light"
                        download
                      >
                        Descargar PDF
                      </a>
                    ) : (
                      <a
                        href={certificatePdf}
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
          );
        }
      )}
    </Accordion>
  );
}

export default Cards;
