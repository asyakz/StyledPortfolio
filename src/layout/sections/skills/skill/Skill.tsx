import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";
import Tilt from 'react-parallax-tilt';

type SkillPropsType = {
  iconId: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill >
      <Tilt 
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <FlexWrapper align="center" justify="center">
          <Icon iconId={props.iconId} />
        </FlexWrapper>
      </Tilt>
    </S.Skill>
  );
}
