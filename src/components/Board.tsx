import styled from "styled-components";
import Letter from "./Letter";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../App";
import { Box, Typography } from "@mui/material";
import Popup from "./Popup";

const Board = () => {
  const { wordFound, notInWordBank } = useContext(BoardContext);
  return (
    <>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography fontSize={"30px"} fontWeight={"600"} marginTop={2}>
          Wordle
        </Typography>
        <BoardContainer>
          {[0, 1, 2, 3, 4, 5].map((attemptValue) => (
            <Row key={attemptValue}>
              {[0, 1, 2, 3, 4].map((letterPosition, index) => (
                <Letter
                  key={index}
                  letterPosition={letterPosition}
                  attemptValue={attemptValue}
                />
              ))}
            </Row>
          ))}
        </BoardContainer>

        <Popup message="Word Found!" show={wordFound} />
        <Popup message="Not in word bank" show={notInWordBank} />
      </Box>
    </>
  );
};

export default Board;

const BoardContainer = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
