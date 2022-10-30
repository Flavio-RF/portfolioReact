import "./about.css";
import Icons from "./Icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function About() {
  const { dark } = useContext(ThemeContext);

  return (
    <Container
      id="About"
      fluid
      className={
        dark
          ? "text-center p-md-5 py-5 bg-dark text-white"
          : "text-center py-5 p-md-5"
      }
    >
      <h1 className="fs-1 fw-bold  ">Sobre mi</h1>
      <Row xs="auto" sm={1} md={1} lg={2} className="justify-content-xl-center">
        <Col xs={12} xxl={5} className="mt-5 px-md-5">
          <span className="fs-2 fw-bolder ">
            Como inicie en la programación.
          </span>
          <p className="mt-5 text-start lh-lg">
            Actualmente tengo 27 años, vivo en Montevideo y trabajo en una
            empresa de fumigación mientras estudio programación, soy un
            apasionado por la tecnologia que busca hacer un cambio de sector
            laboral, incentivado por buscar un trabajo mas acorde a mis gustos y
            habilidades en las cuales me quiero seguir desarrollando.
          </p>
          <p className="text-start lh-lg">
            En el verano de 2021-2022 empecé a programar de manera autodidacta
            con cursos de Udemy, al ver que no seria tan facil decidí dar el
            siguiente paso de comenzar a cursar en Hack Academy trabajando con
            proyectos reales y resultados notables. En cuanto a mi siempre busco
            perfeccionar mis habilidades e ir avanzando, soy exigente conmigo
            mismo sin dejar de buscar ayuda cuando se lo necesita, tengo muy
            claro que la comunicacion siempre es la clave en cualquier equipo
            laboral.
          </p>
        </Col>
        <Col className="mt-5" xs={12} xxl={5}>
          <span className="fs-2 fw-bolder">Habilidades tecnicas.</span>
          <Icons dark={dark} />
        </Col>
      </Row>
    </Container>
  );
}
export default About;
