import "./Home.css";
import BarberShopSection from "./../../components/home/BarberShopSection/BarberShopSection";
import BestHairdressersSection from "./../../components/home/BestHairdressersSection/BestHairdressersSection";


const Home = () => {
  return (
    <section id="Home">
      <BarberShopSection />
      <BestHairdressersSection />
    </section>
  );
};

export default Home;
