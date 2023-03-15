import "./App.css";

import NavSide from "./components/NavSide/NavSide";
import Home from "./pages/Home/Home";
import OurStory from "./pages/OurStory/OurStory";
import Services from "./pages/Services/Services";
import PriceList from "./pages/PriceList/PriceList";
import Contact from "./pages/Contact/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="d-flex">
    <div className="flex-fixed">
        <NavSide  />
    </div>
      <div>
        <Home />
        <Container>
          <OurStory />
          <Services />
          <PriceList />
          <Contact />
        </Container>
      </div>
    </div>
  );
}

export default App;
