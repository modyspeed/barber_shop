import { Button, Col, Container, Row } from "react-bootstrap";
import BaberCard from "./BaberCard/BaberCard";
import "./BestHairdressersSection.css";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import img1 from "../../../assets/images/barber/portrait-male-hairdresser-with-scissors.jpg";
import img2 from "../../../assets/images/barber/portrait-mid-adult-bearded-male-barber-with-folded-arms.jpg";
const BestHairdressersSection = () => {
  const dataProps = [
    {
      id:1,
      name: "ahmed",
      image: img1,
      social: [
        <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
          <FaFacebook />
        </Button>,
        <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
          <FaInstagram />
        </Button>,
        <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
          <FaWhatsappSquare />
        </Button>,
      ],
    },
    {
      id:2,
      name: "mohamed",
      image: img2,
      social: [
        <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
          <FaFacebook />
        </Button>,
        <Button className="d-flex justify-content-center align-items-center rounded-circle socialContainer">
          <FaInstagram />
        </Button>,
      ],
    },
  ];
  return (
    <Container className="py-5">
      <div className="hairdressers-head">
        <h2>Best hairdressers</h2>
        <p>
          Gentlemen's Barber Shop is new Bootstrap v5 HTML CSS template by
          <span>TemplateMo</span> for everyone. There is a sidebar menu to
          navigate the one-page layout. You can feel free to adapt this template
          for your business.
        </p>
      </div>
      <div className="Babers">
        <h4 className="text-danger ">Meet Babers</h4>
        <Row
          sm={1}
          xs={1}
          md={2}
          lg={3}
          className="d-flex justify-content-lg-around align-items-center justify-content-sm-center justify-content-md-around  gap-sm-5 gap-5 gap-md-5 "
        >
          {dataProps.map((item) => {
            return (
              <Col key={item.id} >
                <BaberCard  key={item.id} {...item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default BestHairdressersSection;
