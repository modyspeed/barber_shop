import { Container } from "react-bootstrap";
import "./BestHairdressersSection.css";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
const BestHairdressersSection = () => {
  return (
    <Container className="py-5">
      <div className="head">
        <h2>Best hairdressers</h2>
        <p>
          Gentlemen's Barber Shop is new Bootstrap v5 HTML CSS template by
          <span>TemplateMo</span> for everyone. There is a sidebar menu to
          navigate the one-page layout. You can feel free to adapt this template
          for your business.
        </p>
      </div>
      <div className="Babers">
        <h4 className="text-danger">Meet Babers</h4>
        <div className="d-flex justify-content-around align-items-baseline my-5">
          <div className="BaberCard">
            <div className="BaberCard-img"></div>
            <div className="BaberCard-info d-flex align-items-baseLine justify-content-between p-3 ">
              <h6>Redo</h6>
              <div className="BaberCard-social d-flex align-items-center justify-content-between  gap-2 fs-2 ">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsappSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BestHairdressersSection;
