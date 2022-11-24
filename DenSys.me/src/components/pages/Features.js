import React from "react";
import "./Features.css";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
0% {opacity: 0;}
25% {opacity: 1;}
75% {opacity: 1;}
100% {opacity: 0;}


`;

const Wrapper = styled.h1`
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 4s;
  animation- fill-mode: forwards;
 animation-iteration-count: infinite;
`;

const running = Wrapper.style;
console.log(running);
function Features() {
  return (
    <div className="services-container">
      <Wrapper>Services that we provide...</Wrapper>
    </div>
  );
}

export default Features;
