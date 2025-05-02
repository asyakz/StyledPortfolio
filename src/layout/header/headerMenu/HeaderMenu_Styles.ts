import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// Menu

const MenuItem = styled.li`
`

const MenuLink = styled(Link)`
  font-family: "Raleway", serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  @media ${theme.media.M} {
    font-size: 16px;
    line-height: 18px;
  }
`

// MobileMenu

const MobileMenu = styled.nav`
  z-index: 999;
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 800;
  background-color: ${theme.colors.mobileBgcolor};
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    li a {
      color: ${theme.colors.white};
      font-size: 44px;
      line-height: 74px;
      transition: color .4s ease;

      &:hover, &.active {
          color: ${theme.colors.accent};
        }
    }
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  cursor: pointer;
  z-index: 999999;
  position: fixed;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;

  span {
    z-index: 9999;
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 10px;
    right: 0px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: "";
      z-index: 99999;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      transition: transform .2s ease-in-out;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        z-index: 99999;
        transform: rotate(45deg) translateY(0);
        background-color: ${theme.colors.white};
      `}
    }

    &::after {
      content: "";
      z-index: 99999;
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      transition: transform .2s ease-in-out;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        z-index: 99999;
        transform: rotate(-45deg) translateY(0);
        background-color: ${theme.colors.white};
      `}
    }
  }
`

// DesktopMenu

const DesktopMenu = styled.nav`
  z-index: 999;
  min-height: 56px;
  height: 56px;

  ul {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  min-height: 100%;

  li a {
    transition: color .4s ease;
    
      &:hover, &.active {
          color: ${theme.colors.secondary};
        }
    }
}
  `

export const S = {
  MenuItem,
  MenuLink,
  BurgerButton,
  MobileMenuPopup,
  MobileMenu,
  DesktopMenu
}