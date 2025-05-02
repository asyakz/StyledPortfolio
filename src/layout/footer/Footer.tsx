import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";


export const Footer = () => {

  const socialItemsData = [
    {iconId: "instagramSvg", viewBox: "0 0 38 38", height: "38", width: "38", href: "https://instagram.com/asya_kazantseva/"}, 
    {iconId : "linkedinSvg", viewBox: "0 0 38 38", height: "38", width: "38", href: "https://www.linkedin.com/in/asya-kazantseva-50ba251b0/"},
    {iconId: "telegramSvg", viewBox: "0 2 55 55", height: "44", width: "44", href: "https://t.me/asyakz"},
    {iconId: "vkSvg", viewBox: "0 20 81 81", height: "70", width: "70", href: "https://vk.com/asyakz"}
  ];

  return (
    <S.Footer>
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <S.SocialList>
            {socialItemsData.map((item, index) => {
            return (
              <S.SocialItem key={index}>
              <S.SocialLink target="_blank" href={item.href}>
                <Icon iconId={item.iconId} width={item.width} height={item.width} viewBox={item.viewBox}></Icon>
              </S.SocialLink>
            </S.SocialItem>
            )
            })}
          </S.SocialList>
          <S.Copyright>Kazantseva Anastasia 2024</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
}
