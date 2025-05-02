import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import pro1Img from '../../../assets/images/project-1.webp';
import pro2Img from '../../../assets/images/project-2.webp';
import pro3Img from '../../../assets/images/project-3.webp';
import { Container } from "../../../components/Container";
import { S } from "./Projects_Styles";

export const Projects:React.FC = () => {
  
const data = [
  {
    id: 1, title: "Blanchard", text: "This art gallery project Blanchard was created as part of the online school Skillbox", link: "https://asyakz.github.io/Blanchard/", img: pro1Img
  },
  {
    id: 2, title: "Memory Game", text: "The Memory Game was created by me on the basis of vanilla JavaScript", link: "https://asyakz.github.io/MemoryGameJS/", img: pro2Img
  }, 
  {
    id: 3, title: "High Pass", text: "This project of the HighPass photo studio was created as part of the training of the online school Skillbox", link: "https://asyakz.github.io/HighPass/", img: pro3Img
  }
]

  return (
    <S.Projects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction="column" align="center">
          {data.map((item, index) => {
            return <Project key={item.id} title={item.title} text={item.text} src={item.img} link={item.link} btnType={"outlined"} direction={`${index % 2 === 0 ? "row" : "row-reverse"}`}/>
          })}
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
}


