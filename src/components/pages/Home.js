import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Sub from "../Sub";

function Home() {
  return (
    <>
      <HeroSection />
      <Sub></Sub>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
