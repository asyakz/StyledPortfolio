
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./AboutMe_Styles";
import { Slide } from "../../../components/slider/slide/Slide";
import { useState } from "react";
import { TabMenu } from "./tabMenu/TabMenu";

import jewelryImgForSlide1 from "../../../assets/images/img-1.webp";
import jewelryImgForSlide2 from "../../../assets/images/img-2.webp";
import jewelryImgForSlide3 from "../../../assets/images/img-3.webp";
import jewelryImgForSlide4 from "../../../assets/images/img-4.webp";
import jewelryImgForSlide5 from "../../../assets/images/img-5.webp";
import jewelryImgForSlide6 from "../../../assets/images/img-6.webp";

import photoImgForSlide1 from "../../../assets/images/photo-1.webp";
import photoImgForSlide2 from "../../../assets/images/photo-2.webp";
import photoImgForSlide3 from "../../../assets/images/photo-3.webp";
import photoImgForSlide4 from "../../../assets/images/photo-4.webp";
import photoImgForSlide5 from "../../../assets/images/photo-5.webp";
import photoImgForSlide6 from "../../../assets/images/photo-6.webp";

  const jewelryItems = [
    <Slide src={jewelryImgForSlide1} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />,
    <Slide src={jewelryImgForSlide2} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />,
    <Slide src={jewelryImgForSlide3} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />,
    <Slide src={jewelryImgForSlide4} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />,
    <Slide src={jewelryImgForSlide5} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />,
    <Slide src={jewelryImgForSlide6} slideLink="http://asyakz.livemaster.ru" slideText="livemaster" />
  ];

  const photoItems = [
    <Slide src={photoImgForSlide1} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />,
    <Slide src={photoImgForSlide2} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />,
    <Slide src={photoImgForSlide3} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />,
    <Slide src={photoImgForSlide4} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />,
    <Slide src={photoImgForSlide5} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />,
    <Slide src={photoImgForSlide6} slideLink="https://www.shutterstock.com/ru/g/Asya+Kazantseva" slideText="shutterstock" />
  ];

  const SliderJewelryText = "Macrame jewelry designer who creates unique and stylish accessories by combining traditional weaving techniques with modern trends. Each piece is not just a decoration, but a real story woven into the threads. Using natural materials and bright colors, I create original earrings, necklaces and chokers that emphasize the individuality and style of each.";
  const SliderPhotoText = "Specializing in portrait, subject and landscape photography, I strive to show the beauty of the world around us, whether it's a picturesque sunset or people's genuine smiles.";

  export const AboutMe: React.FC = () => {

  const [activeTab, setActiveTab] = useState<number>(0);

  return (

    <S.AboutMe id="about me">
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>More about me</SectionTitle>
          <S.TextAboutMe>A little more about my other activities...</S.TextAboutMe>
          <TabMenu setActiveTab={setActiveTab} activeTab={activeTab}/>
          {activeTab === 0 ? (
            <Slider sliderMainText={SliderJewelryText} items={jewelryItems} />
          ) : (
            <Slider sliderMainText={SliderPhotoText} items={photoItems} />
          )}
        </FlexWrapper>
      </Container>
    </S.AboutMe>);
}

