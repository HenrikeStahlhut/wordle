import styled from "styled-components";
import Letter from "./Letter";
import { useContext } from "react";
import { BoardContext } from "../App";
import { Box, Typography } from "@mui/material";

const Board = () => {
  const { wordFound, notInWordBank } = useContext(BoardContext);
  return (
    <>
      <BoardContainer>
        {[0, 1, 2, 3, 4, 5].map((attemptValue) => (
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
      <Box>
        {wordFound && <Typography>Word Found!</Typography>}
        {notInWordBank && <Typography>Not in word bank</Typography>}
      </Box>
    </>
  );
};

export default Board;

const BoardContainer = styled.div`
  width: 450px;
  /* height: 550px; */
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  /* flex: 33%; */
  height: 65px;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;
