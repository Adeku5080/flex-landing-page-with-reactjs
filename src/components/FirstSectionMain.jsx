import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
// import styled from "styled-components";
import Badge from "./Badge";
import SmallBusinessTxt from "./SmallBusinessTxt";
import SmallBusinessPara from "./SmallBusinessPara";
import Demo from "./Demo";
import VideoDemo from "./VideoDemo";
import SignUp from './SignUp';

const FirstSectionMain = () => {
  return (
    <Container>
      <Header />
      <Badge />
      <SmallBusinessTxt />
      <SmallBusinessPara />
      <Demo />
      <SignUp/>
      <VideoDemo />
    </Container>
  );
}

const Container = styled.div`
  min-height: 768px;
  width: 1440px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;

export default FirstSectionMain