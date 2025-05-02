import styled from "styled-components"
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import photo from "../../../assets/images/header-bg.webp";
import { Link } from "react-scroll";

const Main = styled.section`

  ${Container} {
  display: flex;
  position: relative;
  flex-direction: row;
  padding-top: 111px;
  padding-bottom: 0;

  &::before {
    content: '';
    z-index: 500;
    position: absolute;
    top: -200px;
    right: -100px;
    bottom: 0px;
    left: 0px;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-size: 720px auto;
    background-position: top right;

      @media ${theme.media.XXXL} {
        right: 0px;
      }

      @media ${theme.media.L} {
        background-size: 600px auto;
        top: -120px;
        right: -70px;
      }

      @media ${theme.media.mobile} {
        background-size: 450px auto;
      }
    }

    @media ${theme.media.XXL} {
      overflow: hidden;
    }
  
    @media ${theme.media.L} {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
  } 
`

const MainTitle = styled.h1`
  ${font({family: "'Nunito', serif", weight: 700, color: `${theme.colors.accent}`, Fmin: 20, Fmax: 20})};
  margin-bottom: 12px;
  text-transform: uppercase;

  p {
    display: none;
  }
`

const NameTitle = styled.span`
  ${font({family: "Roboto", weight: 700, color: `${theme.colors.gray.dark}}`, Fmin: 42, Fmax: 64})};
  z-index: 3;
  line-height: 76.8px;
  margin-bottom: 32px;

  @media ${theme.media.M} {
    line-height: 50.4px;
  }
`

const MainText = styled.span`
  ${font({family: "'Nunito', serif", weight: 400, color: `${theme.colors.gray.light}}`, Fmin: 24, Fmax: 24})};
  z-index: 3;
  margin-bottom: 32px;
  line-height: 36px;
  max-width: 80%;
`

const TextWrapper = styled.div`
  z-index: 505;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-basis: 50%;

  @media ${theme.media.L} {
    flex-basis: 100%;
  }
`

const BgWrapper = styled.div`
  position: relative;
  flex-basis: 50%;
  height: auto;

  @media ${theme.media.L} {
    flex-basis: 100%;
    min-height: 400px;
  }

  @media ${theme.media.mobile} {
    flex-basis: 100%;
    min-height: 380px;
  }
`

const MainButton = styled(Link)`
  z-index: 777;
  cursor: pointer;
  min-width: 115px;
  min-height: 43px;
  padding: 8px 24px 8px 24px;
  border-radius: 8px;
  font-family: "Roboto", serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.font};
  transition: color .5s ease-in-out,
            background-color 1s ease-in-out;

&:not(:last-child) {
  margin-right: 12px;
}

&:hover {
      background-color:  ${theme.colors.secondary};
      color:  ${theme.colors.white};
    }
`

export const S = {
  Main,
  MainTitle,
  NameTitle,
  MainText,
  TextWrapper,
  BgWrapper,
  MainButton
}

