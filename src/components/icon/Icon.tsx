import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId : string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width ||"138"} height={props.height || "138"} viewBox={props.viewBox || "0 0 138 138"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
    </svg>
  );
}