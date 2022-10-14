import React from "react";
import styled from "styled-components";
import FifthSectionModal from "./FifthSectionModal";

const FifthSection = () => {
  return <Container>
    <FirstHalf>

    </FirstHalf>

    <SecondHalf>

    </SecondHalf>
    <FifthSectionModal/>
  </Container>;
};

const Container = styled.div`
height:418px;
width:1440px;
// border:1px solid red;
position:relative
//  z-index:-1;
`
const FirstHalf = styled.div`
height:209px;
width:1440px;
background:#ffffff;
`

const SecondHalf = styled.div`
  height: 209px;
  width: 1440px;
  background: #22c55e;  
`;
export default FifthSection;
