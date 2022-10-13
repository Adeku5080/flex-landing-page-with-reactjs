import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Navbar>
        <LogoContainer>
          <LogoIcon>icon</LogoIcon>
          <BrandName>Flex</BrandName>
        </LogoContainer>

        <NavList>
          <ListItems>Product</ListItems>
          <ListItems>Features</ListItems>
          <ListItems>Prices</ListItems>
          <ListItems>Resources</ListItems>
        </NavList>

        <AuthSection>
          <LoginContainer>Log in</LoginContainer>
          <SignUpContainer>Sign up</SignUpContainer>
        </AuthSection>
      </Navbar>
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  border: 1px solid red;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;
const Navbar = styled.div`
//  width:90%;
  border:1px solid yellow;
  display:flex;
  margin:0 88px;
  justify-content:space-between;
  align-items:center
`;

const LogoContainer = styled.div`
border:1px solid red;
display:flex;
`;

const LogoIcon = styled.div``;

const BrandName = styled.div`
  color: #2a3342;
`;

const NavList = styled.ul`
display:flex;
`;

const ListItems = styled.li`
list-style:none;
border:1px solid red;
margin:0 5px;
font-size:16px;
font-weight:500;
line-height:24px;
font-style:normal;
color:#556987;
`;

const AuthSection = styled.div`
border:1px solid green;
width:200px;
display:flex;
align-items:center;

`;

const LoginContainer = styled.div`
width:47px;
height:24px;
border:1px solid red;
margin-right:24px;
`

const SignUpContainer = styled.div`
  color: #ffffff;
  background: #22c55e;
  border-radius: 6px;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  width:86px;
  height:36px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  line-height:20px;
  font-weight:500
`;

export default Header;
