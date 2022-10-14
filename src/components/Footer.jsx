import React from 'react'
import styled from 'styled-components'
import Facebook from './footerlinks/Facebook';
import Instagram from './footerlinks/Instagram';
import Twitter from './footerlinks/Twitter';
import RightsReserved from './RightsReserved';
import Github from './footerlinks/Github';
import Linkedin from './footerlinks/Linkedin';


const Footer = () => {
  return (
    <Container>
      <RightsReserved />
        <Facebook/>
        <Twitter/>
        <Instagram/>
        <Github/>
        <Linkedin/>
    </Container>
  );
}

const Container = styled.div`
  top: 329px;
  height: 236px;
  width: 1440px;
  border-top: 1px solid #333f51;
//   background: radial-gradient(
//     50% 50% at 50% 50%,
//     rgba(42, 51, 66, 0) 0%,
//     #2a3342 100%
//   );
`;
export default Footer