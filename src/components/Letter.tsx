import styled from "styled-components";
import { BoardContext } from "../App";
import { useContext, useEffect } from "react";

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

interface StyledLetterProps {
  color: any;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(BoardContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "default");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return <StlyedLetter color={letterState.toString()}>{letter}</StlyedLetter>;
};

export default Letter;

const StlyedLetter = styled.div<StyledLetterProps>`
  flex: 33%;
  height: 100%;
  color: ${(props) => {
    switch (props.color) {
      case "correct":
        return "#fff";
      case "almost":
        return "#fff";
      case "default":
        return "#fff";
      default:
        return "#000";
    }
  }};
  border: ${(props) => {
    switch (props.color) {
      case "correct":
        return "none";
      case "almost":
        return "none";
      case "default":
        return "none";
      default:
        return "2px solid #d8d8d8";
    }
  }};
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  background-color: ${(props) => {
    switch (props.color) {
      case "correct":
        return "#66A461";
      case "almost":
        return "#E0C36C";
      case "default":
        return "#666666";
      default:
        return "white";
    }
  }};
  animation: ${(props) => {
    switch (props.color) {
      case "correct":
        return "flip 400ms ease forwards";
      case "almost":
        return "flip 400ms ease forwards";
      case "default":
        return "flip 400ms ease forwards";
      default:
        return "none";
    }
  }};

  @keyframes flip {
    0% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;
