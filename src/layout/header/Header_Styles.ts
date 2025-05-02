import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  min-height: 56px;
  height: 56px;
  padding-bottom: 0;

  @media ${theme.media.M} {
    padding-top: 15px;
  }
`

export const S = {
  Header,
}