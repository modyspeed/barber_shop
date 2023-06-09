import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../../components/services/ServiceCard/ServiceCard";
import Title from "../../components/title/Title";
import "./Services.css";
import image1 from "../../assets/images/services/boy-getting-haircut-salon-front-view.jpg";
import image2 from "../../assets/images/services/hairdresser-grooming-client.jpg";
import image3 from "../../assets/images/services/hairdresser-grooming-their-client.jpg";
import image4 from "../../assets/images/services/woman-cutting-hair-man-salon.jpg";

const Services = () => {
  const serviceProps = [
    { name: "Hair cut", price: "36.00", image: image1 },
    { name: "Washing", price: "25.00", image: image2 },
    { name: "Shaves", price: "30.00", image: image3 },
    { name: "Kids", price: "25.00", image: image4 },
  ];
  return (
  <section id="SERVICES" className="my-5">
      <Container >
        <Title title="Services" />
        <Row sm={1} xs={1} md={2} lg={2} className="d-flex ">
          {serviceProps.map((item) => (
            <Col key={item.name}>
              <ServiceCard  {...item} />
            </Col>
          ))}
        </Row>
        
      </Container>
  </section>
  );
};

export default Services;
