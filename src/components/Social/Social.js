import {

  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import "./Social.css";

const Social = () => {
  return (
    <div className="social d-flex gap-1">
      <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
        <FaFacebook />
      </Button>
      <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
        <FaTwitter />
      </Button>
      <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
        <FaYoutube />
      </Button>
      <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
        <FaInstagram />
      </Button>
      <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
        <FaWhatsappSquare />
      </Button>
    </div>
  );
};

export default Social;
