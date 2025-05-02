import styled from "styled-components";
import footerImg from "../../assets/images/footer-bg.png";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  position: relative;
  min-height: 460px;
  background-color: ${theme.colors.primary};

  @media ${theme.media.XXXXL} {
    min-height: 400px;
  }

  @media ${theme.media.XXXL} {
    min-height: 380px;
  }

  @media ${theme.media.XXL} {
    min-height: 330px;
  }

  @media ${theme.media.XL} {
    min-height: 310px;
  }

  @media ${theme.media.L} {
    min-height: 300px;
  }

  @media ${theme.media.M} {
    min-height: 290px;
  }

  @media ${theme.media.tablet} {
    min-height: 280px;
  }

  @media ${theme.media.mobile} {
    min-height: 276px;
  }

  &::before {
      content:'';
      z-index: 888;
      overflow: visible;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-image: url(${footerImg});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      z-index: 700;

      @media ${theme.media.infinit} {
        background-size: 100vw 460px;
      }
    }
`

const SocialList = styled.ul`
  z-index: 998;
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  color: ${theme.colors.font};
  transition: color .4s ease;

  &:hover {
    color:${theme.colors.accent};
  }
`

const Copyright = styled.small`
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: ${theme.colors.gray.light};
  z-index: 1;
`

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}