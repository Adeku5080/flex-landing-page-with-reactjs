import React from "react";
import styled from "styled-components";
import ClientBadge from "./ClientBadge";
import ThirdSectionTxt from "./ThirdSectionTxt";
import ThirdSectionPara from "./ThirdSectionPara";
import Jiggle from "../trustedcompanies/Jiggle";
import Symtric from "../trustedcompanies/Symtric";
import Resecurb from "../trustedcompanies/Resecurb";
import Wishelp from '../trustedcompanies/Wishelp';

const ThirdSection = () => {
  return <Container>
    <ClientBadge/>
    <ThirdSectionTxt/>
    <ThirdSectionPara/>
    <Jiggle/>
    <Symtric/>
    <Resecurb/>
    <Wishelp/>

  </Container>;
};

const Container = styled.div`
position:relative;
  height: 498px;
  width: 1440px;
  // border: 1px solid blue;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;
export default ThirdSection;
