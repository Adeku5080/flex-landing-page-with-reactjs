import React from "react";
import styled from "styled-components";
import FeatureBadge from "./FeatureBadge";
import SecondSectionTxt from "./SecondSectionTxt";
import SecondSectionPara from "./SecondSectionPara";

const SecondSection = () => {
  return <SecondSectionContainer>
      <FeatureBadge/>
      <SecondSectionTxt/>
      <SecondSectionPara/>
  </SecondSectionContainer>;
};

const SecondSectionContainer = styled.div`
position:relative;
  width: 1440px;
  height: 940px;
  border:1px solid red;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(247, 248, 249, 0) 0%,
    #f7f8f9 100%
  );
`;
export default SecondSection;
