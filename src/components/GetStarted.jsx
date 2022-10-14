import React from "react";
import styled from "styled-components";

const GetStarted = () => {
  return <Container>
    Get Started
  </Container>;
};

const Container = styled.div`
  position: absolute;
  top: 117px;
  left: 702px;
  bottom: 116px;
  right: 278px;
  width: 160px;
  height: 56px;
  background: #22c55e;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 6px;
  align-items: center;
  padding: 16px 28px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
font-family:'Poppings',sans-serif;
color:#ffffff;
border-radius:6px;
`;
export default GetStarted;
