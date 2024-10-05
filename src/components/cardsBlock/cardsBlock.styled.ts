import styled from "styled-components";
import { Theme } from "../../styled/global.styled";

export const CardsBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-height: calc(100vh - 160px);
  overflow: auto;
  padding: 40px 60px 50px 60px;
  box-sizing: border-box;
  .errorOrNoData {
    text-align: center;
    padding-top: 20%;
  }
`;

export const CardItemStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${Theme.lightBG};
  padding: 25px;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

export const TimeBlock = styled.div`
  background-color: ${Theme.primaryViolet};
  color: ${Theme.textColorLight};
  padding: 8px 20px;
  min-height: 34px;
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 500px) {
    flex-grow: 1;
    text-align: right;
  }
`;
export const StatusBlock = styled.div`
  background-color: ${Theme.primaryGreen};
  color: ${Theme.textColorLight};
  padding: 8px 20px;
  min-height: 34px;
  text-align: center;
  box-sizing: border-box;
`;
export const DeleteIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${Theme.primaryGreen};
  color: ${Theme.textColorLight};
`;
export const CardContent = styled.div`
  flex-grow: 1;
  margin: 0 10px;
  .name-subject {
    display: flex;
    margin: 0 20px;
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${Theme.textColorLight};
    width: max-content;
    min-height: 34px;
    padding: 8px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .subject {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: ${Theme.textColorLight};
    width: max-content;
    min-height: 34px;
    padding: 8px;
    box-sizing: border-box;
  }
  @media (min-width: 500px) {
    .name-subject {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .name {
      flex-grow: 1;
      min-width: 0;
    }

    .subject {
      flex-grow: 1;
      min-width: 0;
    }
  }

  @media (max-width: 500px) {
    .name-subject {
      display: block;
    }

    .subject {
      margin-top: 5px;
    }
  }
`;

export const ExpandableContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 20px 0 20px;
  button {
    background: ${Theme.primaryBlue};
    min-height: 34px;
    padding: 8px 26px;
  }
`;
export const ExpandContetLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-bottom: 20px;
  }
`;
export const ExpandContentMiddle = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 10px;
  }
`;
export const ExpandContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
