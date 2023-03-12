import "./App.css";
import { NavSide } from "./components";
import { Home, OurStory, Services, PriceList, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
    </div>
  );
}

export default App;
