import "../../App.css";
import Hero from "../Hero";
import React from "react";
import Cards from "../Cards";
import { useRef } from "react";
function Home() {
  const docSection = useRef(null);
  const scrollToSection = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Hero onClick={() => scrollToSection(docSection)} />
      <Cards ref={docSection} />
    </>
  );
}

export default Home;
