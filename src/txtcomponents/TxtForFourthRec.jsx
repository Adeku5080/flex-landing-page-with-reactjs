import React from "react";
import styled from "styled-components";

const TxtForFourthRec = () => {
  return (
    <Container>
      A tool that lets you build a dream website even if you know nothing about
      web design or programming.
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 736px;
  right: 963px;
  left: 182px;
  bottom: 132px;
  width: 295px;
  height: 72px;

  font-family: "Poppins",sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #556987;
`;
export default TxtForFourthRec;
