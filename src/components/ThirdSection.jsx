import React from "react";
import styled from "styled-components";
import ClientBadge from "./ClientBadge";
import ThirdSectionTxt from "./ThirdSectionTxt";
import ThirdSectionPara from "./ThirdSectionPara";

const ThirdSection = () => {
  return <Container>
    <ClientBadge/>
    <ThirdSectionTxt/>
    <ThirdSectionPara/>

  </Container>;
};

const Container = styled.div`
position:relative;
  height: 498px;
  width: 1440px;
  border: 1px solid blue;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;
export default ThirdSection;
