import { ButtonStyled } from "./button.styled";

interface IButtonProps {
  children: React.ReactNode;
  background?: string;
  padding?: string;
  color?: string;
}

const Button = (props: IButtonProps): JSX.Element => {
  const { children, background, padding, color } = props;
  return (
    <ButtonStyled bg={background} padding={padding} color={color}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
