import React from "react";
import styled from "styled-components";

const SecondSectionPara = () => {
  return (
    <Container>
      With our integrated CRM, project management, collaboration and invoicing
      capabilities, you can manage every aspect of your business in one secure
      platform.
    </Container>
  );
};

const Container = styled.div`

position:absolute;
left:261px;
right;260px;
top:188px;
width: 919px;
height: 60px;
border:1px solid blue;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
font-family : "Poppins",sans-serif;
text-align: center;

color: #556987;

`;
export default SecondSectionPara;
