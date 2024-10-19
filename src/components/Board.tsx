import { useState } from "react";
import { boardDefault } from "../utils/Board";
import styled from "styled-components";
import Letter from "./Letter";

const Board = () => {
  const [board, setBoard] = useState(boardDefault);

  return (
    <BoardContainer>
      {[0, 1, 2, 3, 4].map((attemptValue) => (
        <Row key={attemptValue}>
          {[0, 1, 2, 3, 4].map((letterPosition) => (
            <Letter
              letterPosition={letterPosition}
              attemptValue={attemptValue}
            />
          ))}
        </Row>
      ))}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  width: 450px;
  height: 550px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
