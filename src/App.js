import React, { useEffect } from "react";

import Header from "./comps/Header/Header";
import Home from "./comps/Home/Home";
import About from "./comps/About/About";
import Features from "./comps/Features/Features";
import Product from "./comps/Product/Product";
import Faq from "./comps/Faq/Faq";

import "./App.scss";
import Testimonials from "./comps/Testimonials/Testimonials";
import Contact from "./comps/Contact/Contact";
import Footer from "./comps/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className="App" data-aos="fade-in">
      <Header />
      <Home />
      <Features />
      <About />
      <Product />
      <Faq />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
