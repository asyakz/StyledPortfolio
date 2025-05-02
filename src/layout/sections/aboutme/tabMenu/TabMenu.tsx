import { S } from "./TabMenu_Styles";

type TabsPropsType = {
  setActiveTab: any,
  activeTab: any
}

export const TabMenu:React.FC<TabsPropsType> = ({activeTab, setActiveTab}) => {

  return (
    <S.TabMenu>
      <S.Tab btnType={"primary"} active={activeTab === 0} onClick={() => setActiveTab(0)}>Macrame Jewelry Designer</S.Tab>
      <S.Tab btnType={"primary"} active={activeTab === 1} onClick={() => setActiveTab(1)}>Photographer</S.Tab>
    </S.TabMenu>
  );
};

