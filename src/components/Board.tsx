import { useState } from "react";
import { boardDefault } from "../utils/Board";
import styled from "styled-components";
import Letter from "./Letter";

const Board = () => {
  const [board, setBoard] = useState(boardDefault);

  return (
    <BoardContainer>
      {[...Array(5)].map((_, index) => (
        <Row key={index}>
          <Letter></Letter>
          <Letter></Letter>
          <Letter></Letter>
          <Letter></Letter>
          <Letter></Letter>
        </Row>
      ))}
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div``;

const Row = styled.div``;
