import React from "react";
import styled from "styled-components";
import FifthSectionTxt from "./FifthSectionTxt";
import FifthSectionPara from "./FifthSectionPara";
import GetStarted from "./GetStarted";
import LearnMore from "./LearnMore";

const FifthSectionModal = () => {
  return <Container>
    <FifthSectionTxt/>
    <FifthSectionPara/>
    <GetStarted/>
    <LearnMore/>

  </Container>;
};

const Container = styled.div`
  position: absolute;
  // z-index:5
  top: 64px;
  left: 150px;
  right: 150px;
  bottom: 65px;
  width: 1140px;
  height: 290px;
  z-index: 10;
  border-radius:6px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(28, 35, 45, 0) 0%,
    rgba(28, 35, 45, 0.9) 100%
  );
`;

export default FifthSectionModal;
