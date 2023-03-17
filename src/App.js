import "./App.css";

import NavSide from "./components/NavSide/NavSide";
import Home from "./pages/Home/Home";
import OurStory from "./pages/OurStory/OurStory";
import Services from "./pages/Services/Services";
import PriceList from "./pages/PriceList/PriceList";
import Contact from "./pages/Contact/Contact";
import BookAseat from "./components/services/bookAseat/BookAseat";
import Sayhello from "./pages/PriceList/sayHello/Sayhello";
import { useEffect } from "react";

function App() {
  useEffect(() => {
   addActiveClass("Home")
   
  }, []);
  onscroll = () => {
    var position = document.documentElement.scrollTop;
    sections.forEach((section) => {
      if (
        position >= section.offsetTop &&
        position < section.offsetTop + section.offsetHeight
      ) {
        removeActiveClass();
        addActiveClass(section.attributes.id.value);
      }
    });
  };
  const sections = document.querySelectorAll("section");
  const removeActiveClass = () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((act) => act.classList.remove("active"));
  };
  const addActiveClass = (id) => {
    var select = `.nav-link[href="#${id}"]`;
    document.querySelector(select).classList.add("active");
  };

  return (
    <div className="d-flex justify-content-xl-evenly">
      <div className=" d-none d-lg-block">
        <NavSide />
      </div>
      <div className="w-100">
        <Home />
        <OurStory />
        <Services />
        <BookAseat />
        <PriceList />
        <Sayhello />
        <Contact />
      </div>
    </div>
  );
}

export default App;
