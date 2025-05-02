import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  position: relative;
  background-color: ${theme.colors.primary};
  padding-bottom: 30px;
`

// Skill

const Skill = styled.div`
  width: 15%;
  padding: 10px;
  margin-bottom: 84px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${theme.media.XL} {
    width: 25%;
  }

  @media ${theme.media.M} {
    width: 33.33%;
  }

  @media ${theme.media.tablet} {
    width: 50%;
  }
`

export const S = {
  Skills,
  Skill,
}