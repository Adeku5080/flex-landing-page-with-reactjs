import React from "react";
import styled from "styled-components";

const Name = () => {
  return <Container>Darren Dunlap</Container>;
};

const Container = styled.div`
  position: absolute;
  top: 482px;
  left: 630px;
  right: 632px;
  bottom: 162px;
  width: 178px;
  height: 32px;
  text-align: center;
  border: 1px solid red;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;
export default Name;
