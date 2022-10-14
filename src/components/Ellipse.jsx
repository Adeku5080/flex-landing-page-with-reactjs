import React from "react";
import styled from "styled-components";

const Ellipse = () => {
  return (
    <Container>
      <svg
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 9.13001L1.50001 1.05001C1.34799 0.962237 1.17554 0.916031 1.00001 0.916031C0.824471 0.916031 0.652027 0.962237 0.500008 1.05001C0.347404 1.13811 0.220789 1.26497 0.132986 1.41775C0.0451825 1.57053 -0.000691684 1.7438 7.88292e-06 1.92001V18.08C-0.000691684 18.2562 0.0451825 18.4295 0.132986 18.5823C0.220789 18.735 0.347404 18.8619 0.500008 18.95C0.652027 19.0378 0.824471 19.084 1.00001 19.084C1.17554 19.084 1.34799 19.0378 1.50001 18.95L15.5 10.87C15.6539 10.7828 15.7819 10.6563 15.871 10.5035C15.96 10.3506 16.007 10.1769 16.007 10C16.007 9.82311 15.96 9.64938 15.871 9.49654C15.7819 9.3437 15.6539 9.21722 15.5 9.13001ZM2.00001 16.35V3.65001L13 10L2.00001 16.35Z"
          fill="white"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  width: 64px;
  height: 64px;
  background: #22c55e;
  position:absolute;
  right:440px;
  left:440px;
  top:233px;
  bottom:234px;
  border-radius:50%;

  svg{
    // border:1px solid red;
    position:absolute;
    width:16.01px;
    height:18.17px;
    top:22.92px;
    bottom:22.92px;
    left:22.92px;
    right;22.92px

  }
`;
export default Ellipse;
