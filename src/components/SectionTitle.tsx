import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  color: ${theme.colors.font};
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  text-align: center;
  margin-bottom: 80px;

  &::before {
    content: '';
    display: inline-block;
    z-index: 100;
    position: absolute;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};
    bottom: -6px;
    left: 50%;
    transform: translate(-50%);
  }

`