import { Col, Container, Row } from "react-bootstrap";
import Social from "../../components/Social/Social";
import {  FaHome} from "react-icons/fa";
import Title from "../../components/title/Title";
import "./Contact.css";
import ContactCard from "../../components/ContactCard/ContactCard";
import MapLocation from "../../components/mapLocation/MapLocation";
import Branche from "./branches/Branche";
import Footer from "../../components/Footer/Footer";

const Contact = () => {

  return (
    <Container className=" mt-5 ">
      <Row sm={1} md={2} lg={2} className=" justify-content-between align-items-center">
      <Col>
          <div className="my-5 contact-info">
            <Title title="Contact Information" />
            <p>(+49) 120-240-3600</p>
            <p>hello@barber.beauty</p>
            <Social  />
          </div>
      </Col>
      <Col>
          <ContactCard
            icon={<FaHome />}
            title="OPEN DAILY"
            time="10:00 AM - 8:00 PM"
          />
      </Col>
      </Row>
      <MapLocation location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.81937412617623!2d31.24164835984499!3d30.967412741998377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a33830cef875%3A0x6e1054437a2cb669!2z2YbYp9i12YEg2YTZhNmF2LTZiNmK2KfYqg!5e0!3m2!1sar!2seg!4v1678706480989!5m2!1sar!2seg" />
      <div className="branches my-3">
        <Title title="Our Branches" />
        <Row sm={1} md={2} lg={3} >
          <Col>
            <Branche
              title="Alexandria"
              location="Grünberger Str. 31, 10245 Berlin, Germany"
              color="var(--color-secondary)"
              size="20px"
            />
          </Col>
          <Col>
            <Branche
              title="Cairo"
              color="var(--color-secondary)"
              size="20px"
              location="Behrenstraße 27, 10117 Berlin, Germany"
            />
          </Col>
          <Col>
            <Branche
              title="Giza"
              color="var(--color-secondary)"
              size="20px"
              location="Weinbergsweg 23, 10119 Berlin, Germany"
            />
          </Col>
        </Row>
      </div>
      <Row><Footer/></Row>
    </Container>
  );
};

export default Contact;
