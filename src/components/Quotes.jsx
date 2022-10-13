import React from 'react'
import styled from 'styled-components'

const Quotes = () => {
  return (
    <Container>Quotes</Container>
  )
}

const Container = styled.div`
  position: absolute;
  left: 687px;
  right: 689px;
  top: 88px;
  width: 64px;
  height: 22px;
  border-raidius: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  background: #dcfce7;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 36px;
  color: #22c55e;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
export default Quotes