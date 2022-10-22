import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DiNodejs } from "react-icons/di";
import { FaGithub, FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiSequelize,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import "./icons.css";

const icons = [
  {
    id: 1,
    icon: <FaReact size={70} style={{ color: "#02327a" }} />,
    title: "React",
  },
  {
    id: 2,
    icon: <DiNodejs size={70} style={{ color: "green" }} />,
    title: "Node",
  },
  {
    id: 3,
    icon: <SiJavascript size={70} style={{ color: "#d1d100bd" }} />,
    title: "Javascript",
  },
  {
    id: 4,
    icon: <SiExpress size={70} style={{ color: "black" }} />,
    title: "Express",
  },
  {
    id: 5,
    icon: <FaGitAlt size={70} style={{ color: "orange" }} />,
    title: "Git",
  },
  {
    id: 6,
    icon: <FaGithub size={70} style={{ color: "black" }} />,
    title: "Github",
  },
  {
    id: 7,
    icon: <SiMongodb size={70} style={{ color: "green" }} />,
    title: "Mongodb",
  },
  {
    id: 8,
    icon: <SiMysql size={70} style={{ color: "#004bbb" }} />,
    title: "Mysql",
  },
  {
    id: 9,
    icon: <SiSequelize size={70} style={{ color: "#02327a" }} />,
    title: "Sequelize",
  },
];

function Icons({ dark }) {
  return (
    <Container className="mt-5">
      <Row xs={3} sm={3} md={3} lg={3} className="justify-content-center gap-4">
        {icons.map(({ id, icon, title }) => {
          return (
            <Col
              key={id}
              lg={3}
              md={3}
              sm={3}
              className={dark ? "iconDark" : "iconLight"}
            >
              {icon}
              <p>{title}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Icons;
