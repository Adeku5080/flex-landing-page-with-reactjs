import React from "react";
import styled from "styled-components";

const GooglePlay = () => {
  return (
    <Container>
      <Content>
        <Icon>Icon</Icon>

        <Description>
          GET IT ON
          Google Play
        </Description>
      </Content>
    </Container>
  );
};

const Container = styled.div`
position:absolute;
top:126px;
right:197px;
bottom:389px;
left:1077px;
width:166px;
height:50px;
display:flex;
justify-content:center;
align-items:center;

border:1px solid green;

`
const Icon = styled.div`
font-size:12px;
display:flex;
align-items:center;
`
const Description= styled.div`
display:flex;
flex-direction:column;

`
const Content = styled.div`
  width: 132.9px;
  height: 34px;
  border: 1px solid blue;
  display: flex;
  position: absolute;
  width: 127.4px;
  height: 32px;
`;
export default GooglePlay;
