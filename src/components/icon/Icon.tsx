import styled from 'styled-components'
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId : string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <SvgStyled width={props.width ||"138"} height={props.height || "138"} viewBox={props.viewBox || "0 0 138 138"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
    </SvgStyled>
  );
}

const SvgStyled = styled.svg`
display: flex;
justify-content: center;
align-items: center;
  
`