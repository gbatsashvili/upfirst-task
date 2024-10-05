import Button from "../shared/button/button";
import { HeaderStyled } from "./header.styled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Button color="#fff">Header Button</Button>
    </HeaderStyled>
  );
};

export default Header;
