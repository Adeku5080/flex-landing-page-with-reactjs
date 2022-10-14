import React from "react";
import styled from "styled-components";
import Ellipse from "./Ellipse";

const VideoDemo = () => {
  return <Container>
    <Ellipse/>
  </Container>;

}; 

const Container = styled.div`
  position: absolute;
  top: 554px;
  left: 248px;
  right: 248px;
  width: 944px;
  height: 531px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(Rectangle.png);
  border-radius: 24px;
  z-index: 10;
  
  image.png 
`;

export default VideoDemo;
