import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { S } from "./Main_Styles";
import { Typewriter } from 'react-simple-typewriter';
import { Container } from "../../../components/Container";

export const Main: React.FC = () => {

  const aboutMeText = "I am a junior frontend developer with experience in creating interactive web applications using HTML, CSS, JavaScript and React. I strive to develop in the field of web development and am always open to new knowledge and technologies."

  return (
    <S.Main id="home">
      <Container>
        <S.TextWrapper>
          <S.MainTitle>
            <p>Frontend Developer</p>
            <Typewriter
              words={['Frontend Developer']}
              loop={true}
              cursorStyle='_'
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </S.MainTitle>

          <S.NameTitle>Hello, my name is Anastasia Kazantseva</S.NameTitle>
          <S.MainText>{aboutMeText}</S.MainText>
          <FlexWrapper>
            <S.MainButton to={"projects"} smooth={true}>Projects</S.MainButton>
            <Button as="a" href="../../../assets/files/CV.pdf" color={theme.colors.font} btnType={'outlined'} download>Download Resume</Button>
          </FlexWrapper>
        </S.TextWrapper>
        <S.BgWrapper />
      </Container>
    </S.Main>
  );
};

