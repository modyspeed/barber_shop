import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between align-items-center my-4">
      <p>
        Copyright © 2036 Barber Shop - Design: <span>TemplateMo</span>
      </p>
      <Button
        className="d-flex justify-content-center align-items-center rounded-circle up"
        variant="outline-danger"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </Button>
    </div>
  );
};

export default Footer;
