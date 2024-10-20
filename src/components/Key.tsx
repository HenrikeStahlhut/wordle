import { useContext } from "react";
import styled from "styled-components";
import { BoardContext } from "../App";

interface KeyProps {
  keyValue: any;
  isBigKey?: boolean;
}

interface StyledKeyProps {
  isBigKey?: boolean;
}

const Key = ({ keyValue, isBigKey }: KeyProps) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(BoardContext);

  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  return (
    <StyledKey isBigKey={isBigKey} onClick={selectLetter}>
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
  font-size: 20px;
  background-color: grey;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
