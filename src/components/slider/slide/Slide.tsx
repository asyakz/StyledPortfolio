import { S } from "../Slider_Styles";

type SlidePropsType = {
  src: string,
  slideLink?: string,
  slideText?: string
}

export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.SlideWrapper>
        <S.Image src={props.src} />
        <S.Text>See more:</S.Text>
        <S.Link href={props.slideLink} target="blank">{props.slideText}</S.Link>
      </S.SlideWrapper>
    </S.Slide>
  );
}

