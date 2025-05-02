import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const AboutMe = styled.section`
  position: relative;
  background-color: ${theme.colors.primary};
`

const TextAboutMe = styled.p`
  font-family: "Nunito", serif;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: ${theme.colors.gray.light};
`

export const S = {
  AboutMe,
  TextAboutMe
}