import React from "react";
import styled from "styled-components";

const FeatureBadge = () => {
  return <FeatureContainer>FEATURES</FeatureContainer>;
};

const FeatureContainer = styled.div`
  position:absolute;
  top:90px;
  bottom:828px
  border: 1px solid green;
  left: 683px;
  right: 683px;
  width: 74px;
  height: 22px;
  background: #dcfce7;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 36px;
 Padding:2px, 8px, 2px, 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  font-family: "Poppins", sans-serif;
  color: #22c55e;
  display:flex;
  justify-content:center;
  align-items:center;

  
  
  
`;

export default FeatureBadge;
