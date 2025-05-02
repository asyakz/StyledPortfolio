import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { SwiperSlide } from 'swiper/react';

// Slider

const Slider = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextSlider = styled.p`
  margin-bottom: 20px;
  max-width: 80%;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
`

// Slide

const Slide = styled(SwiperSlide)`
  padding-left: 10px;
  padding-right: 10px;

  @media ${theme.media.tablet} {
    padding-left: 0px;
    padding-right: 0px;
  }
`
const SlideWrapper = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 24px;
`

const Text = styled.span`
padding-top: 10px;
`

const Link = styled.a`
  color: ${theme.colors.accent};
`

export const S ={
  Slider,
  TextSlider,
  Slide,
  Image,
  Text,
  SlideWrapper,
  Link,
  TextWrapper
}