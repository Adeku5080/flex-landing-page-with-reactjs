import React from "react";
import styled from "styled-components";

const Wishelp = () => {
  return (
    <Container>
      <Icon>
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.4646 3.2462L34.5195 3.21023C40.1689 -0.0358559 44.7369 -0.990399 46.8637 1.1383C52.8805 7.15322 35.9133 25.8627 30.887 30.889C27.8643 33.9206 24.661 36.7666 21.2946 39.4114V47.0797C18.5881 46.7724 15.9584 45.9835 13.5298 44.7502L13.4748 44.7862C7.82544 48.0323 3.25939 48.9868 1.13069 46.8694C-1.78587 43.9529 1.62681 37.2392 3.24038 34.4684C2.01475 32.0367 1.2263 29.4084 0.910967 26.7036H9.66057C10.0432 28.7343 10.8525 30.6608 12.035 32.3555C13.2175 34.0503 14.7462 35.4747 16.5202 36.5347C15.5108 37.2676 14.4843 37.9645 13.4199 38.6179C11.8613 39.6084 10.2477 40.544 8.57733 41.3867C7.27004 40.2291 6.10075 38.9244 5.09264 37.4986C3.33134 40.8924 2.74425 43.3866 3.67982 44.3165C7.69671 48.2936 25.7641 31.6977 28.7356 28.7263C31.8992 25.5669 34.8583 22.2092 37.5951 18.6736C36.6933 16.3689 35.2202 14.3314 33.3142 12.7528C31.4082 11.1741 29.132 10.1062 26.6997 9.64937V0.899676C29.4067 1.20424 32.0369 1.9933 34.4646 3.22914V3.2462ZM42.9017 10.4921C44.663 7.09832 45.2501 4.6041 44.3145 3.67422C43.3789 2.74433 40.9056 3.34469 37.5099 5.10599C39.5974 6.58747 41.4202 8.41029 42.9017 10.4978V10.4921Z"
            fill="#F16063"
          />
        </svg>
      </Icon>
      <BrandName>Wishelp</BrandName>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 264px;
  bottom: 88px;
  left: 1029px;
  right: 150pxpx;
//   border: 1px solid red;
  width: 261px;
  height: 146px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);
  border-radius: 6px;
`;

const Icon = styled.div`
  //   border: 1px solid red;
  width: 48.15px;
  height: 48px;
  position: absolute;
  top: 49px;
  bottom: 49px;
  right: 170.3px;
  left: 38.99px;
`;

const BrandName = styled.div`
  width: 119.78px;
  height: 33.27px;
  text-transform: lowercase;
  position: absolute;
  left: 102.19px;
  top: 59.23px;
  bottom: 53.5px;
  font-weight: 400;
  //   font-size:11px;
  line-height: 16px;
  font-family: "Inter", sans-serif;
color: #16192c;
`;
export default Wishelp;
