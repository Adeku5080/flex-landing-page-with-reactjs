import React from 'react';
import styled from 'styled-components';

const RightsReserved = () => {
  return <Container>© 2021 Flex. All rights reserved.</Container>;
}

const Container = styled.div`
  position: absolute;
  top: 48px;
  right: 1048px;
  left: 150px;
  bottom: 164px;
  width: 242px;
  height: 24px;
  left: 150px;
  top: 377px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8896ab;
`;
export default RightsReserved