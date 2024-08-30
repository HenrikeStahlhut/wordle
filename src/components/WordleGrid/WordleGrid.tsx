import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import GridRow from "./GridRow";
import commonWords from "../../utils/common_five_letter_words.json";

const WordleGrid = () => {
  const [choosenWord, setChoosenWord] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    const randomWord = commonWords[randomIndex];
    setChoosenWord(randomWord);
  }, []);

  console.log(choosenWord);
  return (
    <Grid container width={"50rem"} justifyContent={"center"}>
      {[...Array(5)].map((_, index) => (
        <GridRow key={index} isFirstRow={index === 0} />
      ))}
    </Grid>
  );
};

export default WordleGrid;
