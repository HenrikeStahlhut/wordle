import Layout from "./Layout";
import "./index.css";
import theme from "./styles/styleTheme";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import { boardDefault, generateWordSet } from "./utils/Board";
import { createContext } from "react";

type BoardContextType = {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currentAttempt: CurrentAttemptType;
  setCurrentAttempt: React.Dispatch<React.SetStateAction<CurrentAttemptType>>;
  handleSelectLetter: ({ keyValue }: any) => void;
  handleDeleteLetter: () => void;
  handleEnter: () => void;
  correctWord: string;
  disabledLetters: string[];
  setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

type CurrentAttemptType = {
  attempt: number;
  letterPosition: number;
};

export const BoardContext = createContext<BoardContextType>({
  board: boardDefault,
  setBoard: () => {},
  currentAttempt: { attempt: 0, letterPosition: 0 },
  setCurrentAttempt: () => {},
  handleSelectLetter: () => {},
  handleDeleteLetter: () => {},
  handleEnter: () => {},
  correctWord: "",
  disabledLetters: [],
  setDisabledLetters: () => {},
});

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState<CurrentAttemptType>({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState<Set<string>>(new Set());
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);

  const correctWord = "HELLO";

  useEffect(() => {
    generateWordSet().then((words) => {
      console.log("wordSet", words);
      setWordSet(words.wordSet);
    });
  }, []);

  const handleSelectLetter = ({ keyValue }: any) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const handleDeleteLetter = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const handleEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i]; //create word from all attempts to compare to wordSet
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word not in wordbank");
    }

    if (currentWord === correctWord) {
      alert("Word found!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BoardContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          handleSelectLetter,
          handleDeleteLetter,
          handleEnter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
        }}
      >
        <Layout />
      </BoardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
