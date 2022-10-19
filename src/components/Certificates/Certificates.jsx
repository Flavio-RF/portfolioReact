import "./certificates.css";
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import Cards from "./Cards";
import fullStack from "../../assets/img/cursos/HA_FULL-STACK-PART-TIME_CertificadoDeAsistencia_FlavioRodriguez_2022.png";
import fullStackPdf from "../../assets/img/cursos/HA_FullStack.pdf";

function Certificates({ dark }) {
  return (
    <Container fluid className={dark ? "bg-dark text-white py-5" : "py-5"}>
      <h2 id="Certificates" className="fs-1 fw-bold text-center py-5">
        Certificados
      </h2>
      <h3 className="fs-3 fw-bolder text-center pb-4">
        Cursos realizados en{" "}
        <a
          className={dark ? " text-warning" : " text-warning"}
          target="_blank"
          href="https://ha.dev"
        >
          Hack Academy
        </a>{" "}
      </h3>
      <Row xs={1} sm={1} md={1} lg={2} className="mx-md-3 ">
        <Col className="">
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
                  Descargar PDF
                </a>
              ) : (
                <a href={fullStackPdf} class="btn btn-outline-dark" download>
                  Descargar PDF
                </a>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-4 mt-sm-4 mt-md-0">
            <Card.Body className={dark && "bg-darkCustom"}>
              <Card.Title className="fw-bold mb-3">
                Conoce mas en detalle sobre los cursos que he realizado.
              </Card.Title>

              <Cards dark={dark} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Certificates;
