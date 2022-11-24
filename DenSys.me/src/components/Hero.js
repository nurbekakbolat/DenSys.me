import React from "react";
import { Button } from "./Button";
import "./Hero.css";
function Hero(props) {
  return (
    <div className="hero-container">
      <h1>Easy hospital management.</h1>
      <p>
        Change the way you control, register ann analyse information about
        patients - with WHO care.
      </p>
      <div className="hero-btns">
        <Button
          onClick={props}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get an appointment
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Hero;
