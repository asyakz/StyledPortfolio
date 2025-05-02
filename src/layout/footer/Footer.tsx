import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";


export const Footer = () => {

  const socialItemsData = [
    {iconId: "instagramSvg", viewBox: "0 0 38 38", height: "38", width: "38"}, 
    {iconId : "linkedinSvg", viewBox: "0 0 38 38", height: "38", width: "38"},
    {iconId: "telegramSvg", viewBox: "0 2 55 55", height: "44", width: "44"},
    {iconId: "vkSvg", viewBox: "0 20 81 81", height: "70", width: "70"}
  ];

  return (
    <S.Footer>
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <S.SocialList>
            {socialItemsData.map((item, index) => {
            return (
              <S.SocialItem key={index}>
              <S.SocialLink>
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
