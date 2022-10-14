import React from 'react'
import styled from 'styled-components'
import RightsReserved from './RightsReserved';
import {ReactComponent as Facebook} from "../assets/icons/facebook-brands.svg"
import { ReactComponent as Github } from "../assets/icons/github-brands.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter-brands.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <Container>
      <RightsReserved />
      <Facebook width={25} height={25} />
      <Twitter width={25} height={25} />
      <Github width={25} height={25} />
      <Linkedin width={25} height={25} />
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