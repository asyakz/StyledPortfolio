import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

export const Skills: React.FC = () => {

  const skillsNames = ["vscodeSvg", "JavaScriptSvg", "cssSvg", "htmlSvg", "typescriptSvg", "styledSvg", "figmaSvg", "gitSvg", "reactSvg", "reduxSvg", "sassSvg", "photoshopSvg"];

  return (
    <S.Skills id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between">
          {skillsNames.map((item, index) => {
            return <Skill key={index} iconId={item} />
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
}


