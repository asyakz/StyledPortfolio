import styled from "styled-components";import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Contacts = styled.section`
  z-index: 700;
  position: relative; 
  background-color: ${theme.colors.primary};
`

const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${Button} {
    min-width: 89px;
  }

  ${FlexWrapper} {
    width: 100%;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  @media ${theme.media.mobile} {
    max-width: 100%;
  }
`

const Field = styled.input`
  margin-bottom: 24px;
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.white};
  padding: 7px 15px;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.gray.light};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`

export const S = {
  Contacts,
  Form,
  Field
}