import { Button, Container } from "react-bootstrap";
import "./BarberShopSection.css";

const BarberShopSection = () => {
  return (
    <div className="homeWraper">
      <div className="overlay">
        <Container>
          <div className="homeWraper-info">
            <h1>Barber Shop</h1>
            <p>Get the most professional haircut for you</p>

            <div>
              <Button variant="outline-light" className="mx-2  ">
                About Us
              </Button>
              <Button variant="danger" className="mx-2  ">
                What We do
              </Button>
            </div>
          </div>
        </Container>
        <div className="hurry-up">
          <div className="hurry-up-img"></div>
          <div className="hurry-up-content">
            <h4>
              Hurry Up! <br />
              Get good <br />
              haircut.
            </h4>
            <Button>Book a seat</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberShopSection;
