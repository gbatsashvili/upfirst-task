import { Theme } from "../../styled/global.styled";
import Button from "../shared/button/button";
import { FooterStyled } from "./footer.styled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <Button background={Theme.lightBG}>Help Center</Button>
    </FooterStyled>
  );
};

export default Footer;
