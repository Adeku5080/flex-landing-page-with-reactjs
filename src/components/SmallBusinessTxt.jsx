import React from 'react';
import styled from 'styled-components';

const SmallBusinessTxt = () => {
  return (
    <Container>
        <Text>
        A small business is only as good as its tools
        </Text>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid red;
  position: absolute;
  left: 297px;
  top: 174px;
  right: 296px;
  width: 847px;
  height: 144px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.02em;
  color: #2a3342;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;
export default SmallBusinessTxt