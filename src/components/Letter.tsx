import styled from "styled-components";
import { BoardContext } from "../App";
import { useContext } from "react";

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

interface StyledLetterProps {
  color: any;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  const { board, correctWord, currentAttempt } = useContext(BoardContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "default");

  return <StlyedLetter color={letterState}>{letter}</StlyedLetter>;
};

export default Letter;

const StlyedLetter = styled.div<StyledLetterProps>`
  flex: 33%;
  height: 100%;
  border: 2px solid #d8d8d8;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  background-color: ${(props) => {
    switch (props.color) {
      case "correct":
        return "#6aaa64";
      case "almost":
        return "#c9b458";
      case "default":
        return "#c0c0c0";
      default:
        return "white";
    }
  }};
`;
