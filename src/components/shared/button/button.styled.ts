import styled from "styled-components";
import { Theme } from "../../../styled/global.styled";

export const ButtonStyled = styled.button<{ bg?: string; padding?: string }>`
  background: ${({ bg }) => (bg ? bg : Theme.violetBg)};
  padding: ${({ padding }) => (padding ? padding : "10px 20px")};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
