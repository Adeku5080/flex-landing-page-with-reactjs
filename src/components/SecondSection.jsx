import React from "react";
import styled from "styled-components";
import FeatureBadge from "./FeatureBadge";
import SecondSectionTxt from "./SecondSectionTxt";
import SecondSectionPara from "./SecondSectionPara";
import SmallRectangles from "../reusable/SmallRectangles";
import SecondSmallRec from "../reusable/SecondSmallRec";
import ThirdSmallRec from '../reusable/ThirdSmallRec';
import FourthSmallRec from "../reusable/FourthSmallRec";
import FifthSmallRec from "../reusable/FifthSmallRec";
import SixthSmallRec from "../reusable/SixthSmallRec";
import HeadingForSmallRecs from "../txtcomponents/HeadingForSmallRecs";
import TxtForSmallRecs from "../txtcomponents/TxtForSmallRecs";
import HeadingForSecondRec from "../txtcomponents/HeadingForSecondRec";
import TxtForSecondRec from "../txtcomponents/TxtForSecondRec";
import HeadingForThirdRec from "../txtcomponents/HeadingForThirdRec";
import TxtForThirdRec from "../txtcomponents/TxtForThirdRec";
import HeadingForFourthRec from "../txtcomponents/HeadingForFourthRec";
import TxtForFourthRec from "../txtcomponents/TxtForFourthRec";
import HeadingForFifthRec from "../txtcomponents/HeadingForFifthRec";
import TxtForFifthRec from "../txtcomponents/TxtForFifthRec";
import HeadingForSixthRec from "../txtcomponents/HeadingForSixthRec";
import TxtForSixthRec from "../txtcomponents/TxtForSixthRec";

const SecondSection = () => {
  return (
    <SecondSectionContainer>
      <FeatureBadge />
      <SecondSectionTxt />
      <SecondSectionPara />
      <SmallRectangles/>
      <HeadingForSmallRecs/>
      <TxtForSmallRecs/>
      <SecondSmallRec/>
      <HeadingForSecondRec/>
      <TxtForSecondRec/>

      <ThirdSmallRec/>
      <HeadingForThirdRec/>
      <TxtForThirdRec/>

      <FourthSmallRec/>
      <HeadingForFourthRec/>
      <TxtForFourthRec/>

      <FifthSmallRec/>
      <HeadingForFifthRec/>
      <TxtForFifthRec/>

      <SixthSmallRec/>
      <HeadingForSixthRec/>
      <TxtForSixthRec/>
    </SecondSectionContainer>
  );
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
