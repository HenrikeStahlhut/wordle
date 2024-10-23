import styled from "styled-components";
import Key from "./Key";
import { useCallback, useContext, useEffect } from "react";
import { BoardContext } from "../App";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { handleSelectLetter, handleDeleteLetter, handleEnter } =
    useContext(BoardContext);

  const handleKeyboard = useCallback(
    (e: any) => {
      if (e.key === "Enter") {
        handleEnter();
      } else if (e.key === "Backspace") {
        handleDeleteLetter();
      } else {
        [...keys1, ...keys2, ...keys3].forEach((key) => {
          if (e.key === key) {
            handleSelectLetter({ keyValue: key });
          }
        });
      }
    },
    [handleEnter, handleDeleteLetter, handleSelectLetter],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <StyledKeyboard>
      <KeyboardRow1>
        {keys1.map((keys) => {
          return <Key keyValue={keys} />;
        })}
      </KeyboardRow1>
      <KeyboardRow2>
        {keys2.map((keys) => {
          return <Key keyValue={keys} />;
        })}
      </KeyboardRow2>
      <KeyboardRow3>
        <Key keyValue={"ENTER"} isBigKey={true} />
        {keys3.map((keys) => {
          return <Key keyValue={keys} />;
        })}
        <Key keyValue={"DELETE"} isBigKey={true} />
      </KeyboardRow3>
    </StyledKeyboard>
  );
};

export default Keyboard;

const StyledKeyboard = styled.div`
  width: 700px;
  height: 300px;
  margin-top: 60px;
`;

const KeyboardRow1 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const KeyboardRow2 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

const KeyboardRow3 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;
