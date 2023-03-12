import { Container } from "react-bootstrap";
import BaberCard from "./BaberCard/BaberCard";
import "./BestHairdressersSection.css";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import img1 from "../../../assets/images/barber/portrait-male-hairdresser-with-scissors.jpg";
import img2 from "../../../assets/images/barber/portrait-mid-adult-bearded-male-barber-with-folded-arms.jpg";
const BestHairdressersSection = () => {
  const dataProps = [
    {
      name: "ahmed",
      image: img1,
      social:[<FaFacebook/>,<FaInstagram/>,<FaWhatsappSquare/>]
    },
    {
      name: "mohamed",
      image: img2,
      social:[<FaFacebook/>,<FaInstagram/>]
    },
  ];
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
          {dataProps.map((item) => {
            return <BaberCard key={item.name} {...item} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default BestHairdressersSection;
