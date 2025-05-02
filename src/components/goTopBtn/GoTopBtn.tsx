import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {

const [showBtn, setShowBtn] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
  })
}, [])

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
        <Icon iconId="goTop" width="60" height="60" viewBox="0 0 60 60"/>
      </StyledGoTopBtn>
      )}
    </>
  );
}

const StyledGoTopBtn = styled.button`
  cursor: pointer;
  position: fixed;
  right: 30px;
  bottom: 30px;
  opacity: .5;
  z-index: 999999;
`