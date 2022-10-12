import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const FirstSection = () => {
  return (
    <Container>
        <Header/>
    </Container>
  )
}

const Container = styled.div`
width:1440px;
height:1205px;
border:1px solid green;
`
export default FirstSection