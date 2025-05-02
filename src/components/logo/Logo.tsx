import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return (
    <div>
      <a onClick={()=>{scroll.scrollToTop()}}>
        <StyledLogo>Anastasia Kazantseva</StyledLogo>
      </a>
    </div>
  );
};

const StyledLogo = styled.span`
  font-family: "Comfortaa", serif;
  font-size: 18px;
  font-weight: 700;

  @media ${theme.media.M} {
    font-size: 16px;
    display: block;
    max-width: 80px;
  }
`