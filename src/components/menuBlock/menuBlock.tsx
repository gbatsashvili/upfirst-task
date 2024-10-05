import { Theme } from "../../styled/global.styled";
import Button from "../shared/button/button";
import {
  MenuBlockStyled,
  MainMenuStyled,
  LogoutButton,
} from "./menuBlock.styled";

const MenuBlock = (): JSX.Element => {
  return (
    <MenuBlockStyled>
      <MainMenuStyled>Main menu</MainMenuStyled>
      <LogoutButton>
        <Button background={Theme.lightBG}>Log out button</Button>
      </LogoutButton>
    </MenuBlockStyled>
  );
};

export default MenuBlock;
