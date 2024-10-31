import { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

interface KeyProps {
  keyValue: any;
  isBigKey?: boolean;
  disabled?: boolean;
}

interface StyledKeyProps {
  isBigKey?: boolean;
  disabled?: boolean;
}

const Key = ({ keyValue, isBigKey, disabled }: KeyProps) => {
  const { handleSelectLetter, handleDeleteLetter, handleEnter } =
    useContext(BoardContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      handleEnter();
    } else if (keyValue === "DELETE") {
      handleDeleteLetter();
    } else {
      handleSelectLetter({ keyValue });
    }
  };

  return (
    <StyledKey isBigKey={isBigKey} disabled={disabled} onClick={selectLetter}>
      {keyValue}
    </StyledKey>
  );
};

export default Key;

const StyledKey = styled.div<StyledKeyProps>`
  width: ${(props) => (props.isBigKey ? "100px" : "50px")};
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) => (props.disabled ? "#6f6f6f" : "#a5a5a5")};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
