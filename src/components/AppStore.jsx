import React from "react";
import styled from "styled-components";

const AppStore = () => {
  return <Container>
    <Content>
        <Icon>
            ico
        </Icon>
         <Description>
            Download on the App Store
         </Description>
    </Content>

  </Container>;
};

const Container = styled.div`
position:absolute;
top:192px;
right:197px;
bottom:323px;
left:1077px;
border:1px solid blue;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
  border: 1px solid red;
  width: 127.4px;
  height: 32px;
  display:flex;

`;

const Icon= styled.div``

const Description = styled.div`
font-size:12px;
`
export default AppStore;
