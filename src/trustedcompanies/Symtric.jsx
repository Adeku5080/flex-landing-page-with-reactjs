import React from "react";
import styled from "styled-components";

const Symtric = () => {
  return (
    <Container>
      <Icon>
        <svg
          width="40"
          height="44"
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.8435 13.8351L12.4829 17.9163L10.2367 14.02L12.5856 9.93885H28.9926L32.4763 3.89636H9.09898L4.49225 11.887C7.94805 17.857 11.3985 23.8271 14.8435 29.7972H21.8109C20.061 26.7681 18.312 23.7395 16.564 20.7114L16.0796 19.8731H32.0476L38.9151 31.7644L32.0476 43.6365H6.85289L0.0558404 31.6499L3.46906 25.7219L5.72985 29.6166L4.50695 31.7497L9.11368 39.7403H29.7883L34.4097 31.7497L29.803 23.7591H22.8356C24.3134 26.3331 25.7922 28.9066 27.272 31.4796L27.4394 31.7453L26.3163 33.6934H12.5974C8.44473 26.5127 4.29748 19.3373 0.155622 12.1673L0 11.8826L6.85289 -0.00866699H39.2411L31.2563 13.8351H14.8435Z"
            fill="#7F46F0"
          />
        </svg>
      </Icon>
      <BrandName>SYMTRIC</BrandName>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 264px;
  bottom: 88px;
  left: 443px;
  right: 736px;
//   border: 1px solid red;
  width: 261px;
  height: 146px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(85, 105, 135, 0.1);
  border-radius: 6px;
`;

const Icon = styled.div`
//   border: 1px solid red;
  width: 39.24px;
  height: 43.65px;
  position: absolute;
  top: 50.99px;
  bottom: 51.36px;
  right: 168.76px;
  left: 53px;
`;

const BrandName = styled.div`
  width: 101.71px;
  height: 28.12px;
  position: absolute;
  left: 105.36px;
  top: 58.64px;
  bottom: 59.24px;
  font-weight: 400;
  //   font-size:11px;
  line-height: 16px;
  font-family: "Inter", sans-serif;

  color: #110f14;
`;
export default Symtric;
