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

        {/* {wordFound && (
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: "3px",
              bgcolor: "#000",
              margin: "20px 0 0 0",
              width: "fit-content",
              position: "absolute",
              right: "50%",
              transform: "translate(50%, 0)",
              top: "2.5rem",
            }}
          >
            <Typography sx={{ color: "#fff" }}>Word Found!</Typography>
          </Box>
        )}
        {notInWordBank && (
          <Box
            sx={{
              padding: "5px 10px",
              borderRadius: "3px",
              bgcolor: "#000",
              margin: "20px 0 0 0",
              width: "fit-content",
              position: "absolute",
              right: "50%",
              transform: "translate(50%, 0)",
              top: "2.5rem",
            }}
          >
            <Typography sx={{ color: "#fff" }}>Not in word bank</Typography>
          </Box>
        )} */}
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
