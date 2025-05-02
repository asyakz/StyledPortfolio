import styled from "styled-components"
import { Button } from "../../../../components/Button";

const TabMenu = styled.div`
  display: flex;
  z-index: 10;
`

const Tab = styled(Button)`
  box-shadow: none;
`

export const S = {
  TabMenu,
  Tab
}