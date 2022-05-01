import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === "left" ? "10px" : "")};
  right: ${(props) => (props.direction === "right" ? "10px" : "")};
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  display: flex;
  background-color: ${(props) => props.bg};
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  height: 80%;
  width: 100%;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 24px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrowKey = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleArrowKey("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((element) => {
          return (
            <Slide bg={element.bg}>
              <ImgContainer>
                <Image src={element.img}></Image>
              </ImgContainer>
              <InfoContainer>
                <Title>{element.title}</Title>
                <Desc>{element.desc}</Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleArrowKey("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
