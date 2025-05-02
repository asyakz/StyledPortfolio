import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
  title: string,
  text: string,
  src: string,
  link?: string
  btnType: string,
  direction?: string
}

export const Project:React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <FlexWrapper direction={props.direction}>
        <S.LeftContainer>
          <S.Title>{props.title}</S.Title>
          <S.Text>{props.text}</S.Text>
          <Button as={S.Link} href={`${props.link || '#'}`} target="_blank" btnType={"outlined"}>View project</Button>
        </S.LeftContainer>
        <S.RightContainer>
          <S.Image src={props.src} alt="" />
        </S.RightContainer>
      </FlexWrapper>
    </S.Project>
  );
}

