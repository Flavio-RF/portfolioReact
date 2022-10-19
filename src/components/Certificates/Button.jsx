import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Button from "react-bootstrap/Button";

function CustomToggle({ children, eventKey, dark }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Button
      onClick={decoratedOnClick}
      variant={dark ? "outline-light" : "outline-dark"}
    >
      {children}
    </Button>
  );
}

export default CustomToggle;
