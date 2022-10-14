import React from "react";
import styled from "styled-components";
import AppStore from "./AppStore";
import CareersTxtSectionSix from "./CareersTxtSectionSix";
import FeaturesTxtSectionSix from "./FeaturesTxtSectionSix";
import GooglePlay from "./GooglePlay";
import HelpTxtSectionSix from "./HelpTxtSectionSix";
import PricingTxtSectionSix from "./PricingTxtSectionSix";
import PrivacyTxtSectionSix from "./PrivacyTxtSectionSix";
import ProductTxtSectionSix from "./ProductTxtSectionSix";
import ResourcesTxtSectionSix from "./ResourcesTxtSectionSix";
import SixthSectionFlexIcon from "./SixthSectionFlexIcon";
import SixthSectionLogo from "./SixthSectionLogo";
import SixthSectionTxt from "./SixthSectionTxt";

const SixthSectionMoreInfo = () => {
  return (
    <Container>
      <SixthSectionFlexIcon />
      <SixthSectionLogo />
      <SixthSectionTxt />
      <GooglePlay />
      <AppStore />
      <ProductTxtSectionSix />
      <FeaturesTxtSectionSix />
      <PricingTxtSectionSix />
      <ResourcesTxtSectionSix />
      <CareersTxtSectionSix />
      <HelpTxtSectionSix />
      <PrivacyTxtSectionSix />
    </Container>
  );
};

const Container = styled.div`
height:329px;
width:1440px;
border;1px solid yellow;
// background: radial-gradient(50% 50% at 50% 50%, rgba(42, 51, 66, 0) 0%, #2A3342 100%);
`;
export default SixthSectionMoreInfo;
