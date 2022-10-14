import React from 'react';
import styled from 'styled-components'
import Footer from './Footer';
import SixthSectionMoreInfo from './SixthSectionMoreInfo';
const SixthSection = () => {
  return (
    <Container>
        <SixthSectionMoreInfo/>
         <Footer/>

    </Container>
  )
}
const Container = styled.div`
position:relative;
  width:1440px;
  height: 565px;
  position: relative;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(42, 51, 66, 0) 0%,
    #2a3342 100%
  );
`;
export default SixthSection