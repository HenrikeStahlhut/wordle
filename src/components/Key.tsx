import { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";

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
      {keyValue === "DELETE" ? <BackspaceOutlinedIcon /> : keyValue}
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
  background-color: ${(props) => (props.disabled ? "#787C7E" : "#D4D6DA")};
  color: ${(props) => (props.disabled ? "#fff" : "#282828")};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
