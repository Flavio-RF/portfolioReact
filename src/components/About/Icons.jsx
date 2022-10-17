import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiJavascript } from "react-icons/si";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { SiSequelize, SiMysql, SiMongodb } from "react-icons/si";
import "./icons.css";

function Icons({ dark }) {
  return (
    <Container className="mt-5">
      <Row xs={3} sm={3} md={3} lg={3} className="justify-content-center gap-1">
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <FaReact size={70} style={{ color: "#02327a" }} />
          <p>React</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <DiNodejs size={70} style={{ color: "green" }} />
          <p>Node</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <SiJavascript size={70} style={{ color: "#d1d100bd" }} />
          <p>Javascript</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <SiExpress size={70} style={{ color: "black" }} />
          <p>Express</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <FaGitAlt size={70} style={{ color: "orange" }} />
          <p>Git</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <FaGithub size={70} style={{ color: "black" }} />
          <p>Github</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <SiMongodb size={70} style={{ color: "green" }} />
          <p>Mongodb</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <SiMysql size={70} style={{ color: "#004bbb" }} />
          <p>Mysql</p>
        </Col>
        <Col lg={3} md={3} sm={3} className={dark ? "iconDark" : "iconLight"}>
          <SiSequelize size={70} style={{ color: "#02327a" }} />
          <p>Sequelize</p>
        </Col>
      </Row>
    </Container>
  );
}
export default Icons;
