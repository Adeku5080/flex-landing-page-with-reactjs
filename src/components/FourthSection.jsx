import React from "react";
import styled from "styled-components";
import Quotes from "./Quotes";
import FourthSectionTxt from "./FourthSectionTxt";
import Avatar from "./Avatar";
import Name from "./Name";
import NameDescription from "./NameDescription";

const FourthSection = () => {
  return <Container>
    <Quotes/>
    <FourthSectionTxt/>
    <Avatar/>
    <Name/>
    <NameDescription/>

  </Container>;
};

const Container = styled.div`
  width: 1440px;
  height: 682px;
  position: relative; 
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(42, 51, 66, 0) 0%,
    #2a3342 100%
  );
`;
export default FourthSection;
