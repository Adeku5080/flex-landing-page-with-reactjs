import React from 'react';
import styled from "styled-components"

const FlexIcon = () => {
  return (
    <Container>
      <svg
        className="first-svg"
        width="24"
        height="8"
        viewBox="0 0 24 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.450081 6.91963C4.09966 5.41686 8.17861 5.28805 11.9141 6.61907C15.349 7.82129 18.9986 8.03597 22.4335 7.26312C22.3905 5.33099 22.6481 3.44178 23.3351 1.55259C18.8268 2.88361 13.975 2.75481 9.4667 1.16617C6.89053 0.22157 4.05673 0.221575 1.48055 1.0803C1.52349 2.92656 1.18001 4.81575 0.535966 6.662C0.535966 6.662 0.493018 6.79082 0.450081 6.91963Z"
          fill="#22C55E"
        />
      </svg>

      <svg
        className="second-svg"
        width="24"
        height="8"
        viewBox="0 0 24 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.450081 6.91963C4.09966 5.41686 8.17861 5.28805 11.9141 6.61907C15.349 7.82129 18.9986 8.03597 22.4335 7.26312C22.3905 5.33099 22.6481 3.44178 23.3351 1.55259C18.8268 2.88361 13.975 2.75481 9.4667 1.16617C6.89053 0.22157 4.05673 0.221575 1.48055 1.0803C1.52349 2.92656 1.18001 4.81575 0.535966 6.662C0.535966 6.662 0.493018 6.79082 0.450081 6.91963Z"
          fill="#22C55E"
        />
      </svg>

      <svg
        className="last-svg"
        width="24"
        height="8"
        viewBox="0 0 24 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.450081 6.91963C4.09966 5.41686 8.17861 5.28805 11.9141 6.61907C15.349 7.82129 18.9986 8.03597 22.4335 7.26312C22.3905 5.33099 22.6481 3.44178 23.3351 1.55259C18.8268 2.88361 13.975 2.75481 9.4667 1.16617C6.89053 0.22157 4.05673 0.221575 1.48055 1.0803C1.52349 2.92656 1.18001 4.81575 0.535966 6.662C0.535966 6.662 0.493018 6.79082 0.450081 6.91963Z"
          fill="#22C55E"
        />
      </svg>
    </Container>
  );
}
const Container = styled.div`
//  border:1px solid red;
 width:19.19px;
 height:19.98px;
 position:absolute;
 left:90.05px;
 top:29.43px;
 bottom:713.92
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 transform:rotateX(180deg);
`
export default FlexIcon