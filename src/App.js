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
<<<<<<< HEAD
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
=======
    <div>
      <BrowserRouter>
        <div className="d-flex  ">
          <NavSide />

          <div className="d-flex flex-column  flex-grow-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/story" element={<OurStory />} />
              <Route path="/services" element={<Services />} />
              <Route path="/price" element={<PriceList />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
>>>>>>> e752c1ca66739d039ecb4a3f4767bb7965805a94
    </div>
  );
}

export default App;
