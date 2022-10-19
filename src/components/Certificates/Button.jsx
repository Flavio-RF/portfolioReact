import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Button from "react-bootstrap/Button";

function CustomToggle({ children, eventKey, dark }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div className="d-grid gap-2">
      <Button
        onClick={decoratedOnClick}
        variant={dark ? "outline-light" : "outline-dark"}
      >
        {children}
      </Button>
    </div>
  );
}

export default CustomToggle;
