import React from "react";
import styled from "styled-components";

const DemoAndSignup = () => {
  return <Container>
    {/* <RequestDemo>
        Request a Demo
    </RequestDemo> */}

    <SignUp>
       Signup
    </SignUp>
  </Container>;
};

const Container = styled.div`
border:1px solid yellow;
position:absolute;
left:544px;
top:434px;
height:56px;

`
const RequestDemo = styled.div`
  border: 1px solid green;
  // color: white;
  position: absolute;
  left: 544px;
  top: 434px;
  height: 56px;
  background: #22c55e;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 6px;
`;

const SignUp = styled.div``

export default DemoAndSignup;
