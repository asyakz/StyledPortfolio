import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import React from "react";
import { S } from "./Header_Styles";
import { Container } from "../../components/Container";

export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;


  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  const items = ["Home", "Skills", "Projects", "About me", "Contacts"];

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


