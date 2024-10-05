import styled from "styled-components";
import { Theme } from "../../styled/global.styled";

export const MenuBlockStyled = styled.div`
  background: ${Theme.violetBg};
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 60px;
  box-sizing: border-box;
`;
export const MainMenuStyled = styled.div`
  background: ${Theme.darkBG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  min-height: 280px;
  font-size: 16px;
  font-weight: 600;
`;
export const LogoutButton = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
