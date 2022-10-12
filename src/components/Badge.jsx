import React from 'react';
import styled from 'styled-components';

const Badge = () => {
  return (
    <Container>Header</Container>
  )
}

const Container = styled.div`
 background:#22c55e;
 position:absolute;
 left:690px;
 top:128px;
 right:688px
 width:62px;
 height:22px;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 36px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
display:flex;
align-items:center;
justify-content:center;
color: #DCFCE7;
padding:2px 8px;

`;
export default Badge