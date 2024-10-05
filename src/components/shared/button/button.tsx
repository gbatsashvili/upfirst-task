import { ButtonStyled } from "./button.styled";

interface IButtonProps {
  children: React.ReactNode;
  background?: string;
  padding?: string;
}

const Button = (props: IButtonProps): JSX.Element => {
  const { children, background, padding } = props;
  return (
    <ButtonStyled bg={background} padding={padding}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
