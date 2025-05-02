import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import React, { useEffect, useState } from "react";
import { S } from "./Header_Styles";
import { Container } from "../../components/Container";
import { queryByTitle } from "@testing-library/react";

export const Header: React.FC = () => {

const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 576;

useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth)
  window.addEventListener("resize", handleWindowResize);

  return () => window.removeEventListener("resize", handleWindowResize);
}, []);

const items = ["Home", "Skills", "Projects", "About me", "Contacts"];

useEffect(() => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    if (header) {
      header.style.backgroundColor = window.scrollY > 100 ? '#ffffffb7' : 'transparent';
    }
  })
}, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          {width < breakpoint 
          ? 
          <MobileMenu menuItems={items} /> 
          : 
          <DesktopMenu menuItems={items} />
          }
        </FlexWrapper>
        </Container>
    </S.Header>
  )
};


