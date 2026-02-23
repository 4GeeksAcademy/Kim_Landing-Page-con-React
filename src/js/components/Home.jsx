import React from "react";
import { MyNavbar } from "./MyNavbar.jsx";
import { Hero } from "./Hero.jsx";
import { CardsSection } from "./CardsSection.jsx";
import { Footer } from "./Footer.jsx";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Hero />
      <CardsSection />
      <Footer />
    </>
  );
};

export default Home;
