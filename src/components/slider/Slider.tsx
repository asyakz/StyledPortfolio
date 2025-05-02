import { S } from "./Slider_Styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type SliderPropsType = {
  sliderMainText?: string,
  items: Array<{}>
}

const responsive = {
  0: {
    items: 1
  },
  768: {
    items: 2
  },
  1200: {
    items: 3,
    itemsFit: 'contain'
  },
};

export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => (
  <S.Slider>
    <S.TextWrapper>
      <S.TextSlider>
        {props.sliderMainText}
      </S.TextSlider>
    </S.TextWrapper>
    <AliceCarousel
      disableButtonsControls
      mouseTracking
      items={props.items}
      responsive={responsive}
      autoPlay={true}
      autoPlayInterval={2000}
      autoPlayStrategy={'default'}
      infinite={true}

    />
  </S.Slider>
);
