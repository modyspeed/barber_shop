import "./App.css";

import NavSide from "./components/NavSide/NavSide";
import Home from "./pages/Home/Home";
import OurStory from "./pages/OurStory/OurStory";
import Services from "./pages/Services/Services";
import PriceList from "./pages/PriceList/PriceList";
import Contact from "./pages/Contact/Contact";
import BookAseat from './components/services/bookAseat/BookAseat';
import Sayhello from "./pages/PriceList/sayHello/Sayhello";

function App() {
  return (
    <div className="d-flex">
      <div className="flex-fixed d-sm-none d-md-none ">
        <NavSide />
      </div>
      <div>
        <Home />
        <OurStory />

        <Services />
        <BookAseat />
        <PriceList />
        <Sayhello/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
