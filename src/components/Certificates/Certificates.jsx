import "./certificates.css";
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import Cards from "./Cards";
import fullStack from "../../assets/img/cursos/HA_FULL-STACK-PART-TIME_CertificadoDeAsistencia_FlavioRodriguez_2022.png";
import fullStackPdf from "../../assets/img/cursos/HA_FullStack.pdf";

function Certificates({ dark }) {
  return (
    <Container fluid className={dark ? "bg-dark text-white p-5" : "p-5"}>
      <h1 id="Certificates" className="fs-1 fw-bold py-5 text-center">
        Certificados
      </h1>
      <Row xs={1} sm={1} md={1} lg={2} className="mx-md-5 ">
        <Col className="mb-5 mb-md-5 mb-sm-5">
          <Card>
            <Card.Img variant="top" src={fullStack} />
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="fw-bold">
                Desarrollador Web Full-Stack
              </Card.Title>
              <Card.Text>
                Curso realizado en modo part-time, dividido en 4 modulos.
              </Card.Text>
              {dark ? (
                <a href={fullStackPdf} class="btn btn-outline-light" download>
                  Download PDF
                </a>
              ) : (
                <a href={fullStackPdf} class="btn btn-outline-dark" download>
                  Download PDF
                </a>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Cards dark={dark} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Certificates;
