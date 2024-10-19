import { useState } from "react";
import { boardDefault } from "../utils/Board";
import styled from "styled-components";

const Board = () => {
  const [board, setBoard] = useState(boardDefault);

  return (
    <BoardContainer>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div``;

const Row = styled.div``;
