import Layout from "./Layout";
import "./index.css";
import theme from "./styles/styleTheme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { boardDefault } from "./utils/Board";
import { createContext } from "react";

type BoardContextType = {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currentAttempt: CurrentAttemptType;
  setCurrentAttempt: React.Dispatch<React.SetStateAction<CurrentAttemptType>>;
  handleSelectLetter: ({ keyValue }: any) => void;
  handleDeleteLetter: () => void;
  handleEnter: () => void;
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
});

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState<CurrentAttemptType>({
    attempt: 0,
    letterPosition: 0,
  });

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
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });
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
        }}
      >
        <Layout />
      </BoardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
