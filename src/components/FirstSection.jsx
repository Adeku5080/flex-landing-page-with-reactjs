import React from 'react';
import styled from 'styled-components';
import FirstSectionFooter from './FirstSectionFooter';
import FirstSectionMain from './FirstSectionMain';

const FirstSection = () => {
  return (
    <Container>
        <FirstSectionMain/>
        <FirstSectionFooter/>
    </Container>
  )
}

const Container = styled.div`
  width: 1440px;
  height: 1205px;
  // border: 1px solid green;
  // background: radial-gradient(
  //   50% 50% at 50% 50%,
  //   rgba(247, 248, 249, 0) 0%,
  //   #f7f8f9 100%
  );
`;
export default FirstSection