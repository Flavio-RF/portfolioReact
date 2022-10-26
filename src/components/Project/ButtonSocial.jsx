import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Card } from "react-bootstrap";

function ButtonSocial() {
  return (
    <div>
      <Card.Link className="" href="#" target="_blank">
        <FaGithub className="buttonSocial" size={30} />
      </Card.Link>
      <Card.Link href="#">
        <TbWorld className="buttonSocial" size={30} />
      </Card.Link>
    </div>
  );
}
export default ButtonSocial;
