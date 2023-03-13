import { Container } from "react-bootstrap";
import BaberCard from "../../components/home/BestHairdressersSection/BaberCard/BaberCard";
import Title from "../../components/title/Title";
import "./PriceList.css";
import image1 from "../../assets/images/vintage-chair-barbershop.jpg"
const PriceList = () => {
  return (
    <Container>
      <Title title="Price List" />
      <p>Starting at $25</p>
      <div className="d-flex justify-content-around align-items-center mt-4">
        <div>
          <div className="d-flex align-items-center font-weight-bold">
            <h4>Haircut</h4>________________
            <span className="text-warning">$32.00</span>
          </div>
          <div className="d-flex align-items-center font-weight-bold">
            <h4>Beard Trim</h4>________________
            <span className="text-warning">$26.00</span>
          </div>
          <div className="d-flex align-items-center font-weight-bold">
            <h4>Razor Cut</h4>________________
            <span className="text-warning">$36.00</span>
          </div>
          <div className="d-flex align-items-center font-weight-bold">
            <h4>Shaves</h4>________________
            <span className="text-warning">$30.00</span>
          </div>
          <div className="d-flex align-items-center font-weight-bold">
            <h4>Styling / Color</h4>________________
            <span className="text-warning">$25.00</span>
          </div>
        </div>
        <div>
          <BaberCard image={image1}/>
        </div>
      </div>
      <div className="my-5  bg-info h-50 d-flex justify-content-center align-items-center"><h1>Say hello</h1> </div>
    </Container>
  );
};

export default PriceList;
