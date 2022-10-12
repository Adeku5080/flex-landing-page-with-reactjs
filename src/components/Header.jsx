import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
<Container>
   <Navbar>
      <LogoContainer>
         <LogoIcon></LogoIcon>
         <BrandName>Flex</BrandName>
      </LogoContainer>
   </Navbar>
</Container>
  )
}

const Container = styled.div`
 width:1440px;
 border:1px solid red;
`
const Navbar = styled.div``

const LogoContainer = styled.div``

const LogoIcon = styled.div``

const BrandName = styled.div``
export default Header