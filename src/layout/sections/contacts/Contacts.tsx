import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import React, { ElementRef, useRef } from "react";

type ContactsPropsType = {
  for?: string
}

export const Contacts: React.FC<ContactsPropsType> = (props: ContactsPropsType) => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_e2s61y9', 'template_r15f2rr', form.current, {
        publicKey: '9xUl9T4I49kJwt2gg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  
  return (
    <S.Contacts id="contacts">
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <StyledLabel for={"username"}>Name</StyledLabel>
          <S.Field required placeholder={"Name"} id="username" name={'user_name'}/>
          <StyledLabel for={"email"}>Email</StyledLabel>
          <S.Field required placeholder={"Email"} id="email" name={'email'}/>
          <StyledLabel for="message">Message</StyledLabel>
          <S.Field required placeholder={"Message"} as={"textarea"} id="message" name={'message'}/>
          <FlexWrapper justify="end">
            <Button type={"submit"} btnType={'primary'}>Send</Button>
          </FlexWrapper>
        </S.Form>
      </Container>
    </S.Contacts>
  );
}

const StyledLabel = styled.label<ContactsPropsType>`
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: ${theme.colors.font};
  margin-bottom: 8px;
`