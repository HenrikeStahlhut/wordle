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
};

export const BoardContext = createContext<BoardContextType>({
  board: boardDefault,
  setBoard: () => {},
});

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault);
  return (
    <ThemeProvider theme={theme}>
      <BoardContext.Provider value={{ board, setBoard }}>
        <Layout />
      </BoardContext.Provider>
    </ThemeProvider>
  );
}

export default App;
