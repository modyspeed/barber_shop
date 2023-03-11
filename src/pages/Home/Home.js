import "./Home.css";
import BarberShopSection from "./../../components/home/BarberShopSection/BarberShopSection";
import BestHairdressersSection from "./../../components/home/BestHairdressersSection/BestHairdressersSection";


const Home = () => {
  return (
    <div className=" flex-column align-items-center gap-2">
      {/* <BarberShopSection /> */}
      <BestHairdressersSection />
    </div>
  );
};

export default Home;
