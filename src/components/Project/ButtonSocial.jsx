import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Card } from "react-bootstrap";

function ButtonSocial({}) {
  return (
    <div>
      <Card.Link href="#" target="_blank">
        <FaGithub className="buttonSocial" size={30} />
      </Card.Link>
      <Card.Link href="#" target="_blank">
        <TbWorld className="buttonSocial" size={30} />
      </Card.Link>
    </div>
  );
}
export default ButtonSocial;
