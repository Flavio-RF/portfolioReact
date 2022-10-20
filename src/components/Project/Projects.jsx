import { Container, Card, Col, Row } from "react-bootstrap";

import Chat from "../../assets/img/Chat.png";
import Notas from "../../assets/img/Notas.png";
import Api from "../../assets/img/API.png";
import "./project.css";

function Projects({ dark }) {
  return (
    <Container fluid className={dark ? "bg-dark text-white py-5" : "py-5"}>
      <hr />
      <h4 id="Projects" className="fs-1 fw-bold text-center py-5 mb-5">
        Mis proyectos personales
      </h4>
      <Row xs={1} sm={2} md={2} className="mx-md-3 g-4 justify-content-center">
        <Col>
          <Card className="portfolio__item text-white">
            <Card.Img src={Chat} alt="Chat image" className="portfolio__img" />
            <div className="portfolio__description">
              <Card.Title className="portfolio__description--title">
                Chat
              </Card.Title>
              <Card.Text className="portfolio__description--text">
                Se creeo una aplicacion real-time usando sockets.io, Node.js,
                Html, Css, JS y MongoDB con Mongoose.
              </Card.Text>
              <div class="buttons__container">
                <a
                  class="button"
                  href="https://app-firstchattest.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <a
                  class="button"
                  href="https://github.com/Flavio-RF/Chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Notas} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={Api} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects;
