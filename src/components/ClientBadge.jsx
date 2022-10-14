import React from 'react';
import styled from 'styled-components';

const ClientBadge = () => {
  return (
    <Container>
        
           OUR CLIENTS
        
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 88px;
  left: 674px;
  right: 674px;
  width: 92px;
  height: 22px;
  border-radius: 36px;
  padding: 2px, 8px, 2px, 8px;
  bottom: 388px;
  background: #dcfce7;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 36px;
  display:flex;
  align-items:center;
  justify-content:center;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    color: #22c55e;

`;
export default ClientBadge