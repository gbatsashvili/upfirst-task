import styled from "styled-components";
import { Theme } from "../../styled/global.styled";

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0 0;

  .paginationButton {
    border: none;
    border-radius: 50%;
    color: ${Theme.textColorLight};
    background: ${Theme.violetBg};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
  .active {
    background: ${Theme.primaryGreen};
  }
`;
