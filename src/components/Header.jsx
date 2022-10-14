import React from "react";
import styled from "styled-components";
import FlexIcon from './navcomponents/FlexIcon';
import Title from "./navcomponents/Title";
import Features from "./navlistitems/Features";
import LogIn from "./navlistitems/LogIn";
import Pricing from "./navlistitems/Pricing";
import Product from "./navlistitems/Product";
import Resources from "./navlistitems/Resources";
import SignUp from "./navlistitems/SignUp";

const Header = () => {
  return (
    <Container>
       <FlexIcon/>
       <Title/>
       <Product/>
       <Features/>
       <Pricing/>
       <Resources/>
       <LogIn/>
       <SignUp/>
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  // border: 1px solid red;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`

export default Header;
