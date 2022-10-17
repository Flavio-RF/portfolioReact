import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HaderSocials() {
  return (
    <div className="hader__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
export default HaderSocials;
