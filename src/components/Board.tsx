import styled from "styled-components";
import Letter from "./Letter";
import { useContext } from "react";
import { BoardContext } from "../App";
import { Box, Typography } from "@mui/material";

const Board = () => {
  const { wordFound, notInWordBank } = useContext(BoardContext);
  return (
    <>
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
      <Box>
        {wordFound && (
          <Typography sx={{ margin: "20px 0 0 0" }}>Word Found!</Typography>
        )}
        {notInWordBank && (
          <Typography sx={{ margin: "20px 0 0 0" }}>
            Not in word bank
          </Typography>
        )}
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
