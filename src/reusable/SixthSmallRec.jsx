import React from "react";
import styled from "styled-components";

const SixthSmallRec = () => {
  return (
    <Container>
      <svg
      className="controls"
        width="1440"
        height="940"
        viewBox="0 0 1440 940"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="940" fill="url(#paint0_radial_2_1808)" />
        <defs>
          <radialGradient
            id="paint0_radial_2_1808"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(720 470) rotate(90) scale(470 720)"
          >
            <stop stop-color="#F7F8F9" stop-opacity="0" />
            <stop offset="1" stop-color="#F7F8F9" />
          </radialGradient>
        </defs>
      </svg>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 600px;
  bottom: 276px;
  left: 1080px;
  right: 296px;
  width: 64px;
  height: 64px;
  background: #22c55e;
  border-radius: 6px;
`;
export default SixthSmallRec;
