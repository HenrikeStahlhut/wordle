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
});

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState<CurrentAttemptType>({
    attempt: 0,
    letterPosition: 0,
  });
  return (
    <ThemeProvider theme={theme}>
      <BoardContext.Provider
        value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
      >
        <Layout />
      </BoardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
