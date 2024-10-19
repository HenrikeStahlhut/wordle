import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import GridRow from "./GridRow";
import commonWords from "../../utils/common_five_letter_words.json";

// TODO: compare guessed word with choosen word

type LetterStatus = "correct" | "present" | "absent";

const WordleGrid = () => {
  const [choosenWord, setChoosenWord] = useState("");
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [rightGuess, setRightGuess] = useState(false);
  const [letterStatuses, setLetterStatuses] = useState<LetterStatus[][]>([]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    const randomWord = commonWords[randomIndex];
    setChoosenWord(randomWord);
  }, []);

  console.log(choosenWord);

  const checkWord = (guess: string, solution: string): LetterStatus[] => {
    const result: LetterStatus[] = new Array(guess.length).fill("absent");
    const solutionArray = solution.split("");

    // First, check for correct letters
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === solution[i]) {
        result[i] = "correct";
        solutionArray[i] = null as any; // Mark this letter as used
        console.log(`Letter '${guess[i]}' is correct at position ${i}`);
      }
    }

    // Then, check for present letters
    for (let i = 0; i < guess.length; i++) {
      if (result[i] === "absent") {
        const index = solutionArray.indexOf(guess[i]);
        if (index !== -1) {
          result[i] = "present";
          solutionArray[index] = null as any; // Mark this letter as used
          console.log(`Letter '${guess[i]}' is present but in wrong position`);
        } else {
          console.log(`Letter '${guess[i]}' is absent from the solution`);
        }
      }
    }

    return result;
  };

  const handleRowComplete = (word: string) => {
    setGuessedWords((prev) => [...prev, word]);
    setCurrentRowIndex((prev) => prev + 1);

    const newLetterStatus = checkWord(word, choosenWord);
    setLetterStatuses((prev) => [...prev, newLetterStatus]);

    if (word === choosenWord) {
      setRightGuess(true);
      // win condition logic
    } else {
      setRightGuess(false);
    }
  };

  // const handleRowComplete = (word: string) => {
  //   setGuessedWords((prev) => [...prev, word]);
  //   setCurrentRowIndex((prev) => prev + 1);

  //   // logic to check if word is correct
  //   if (word === choosenWord) {
  //     setRightGuess(true);
  //     // win condition logic
  //   } else {
  //     setRightGuess(false);
  //   }
  // };

  return (
    <>
      <Grid container width={"50rem"} justifyContent={"center"}>
        {[...Array(5)].map((_, index) => (
          <GridRow
            key={index}
            isFirstRow={index === 0}
            randomWord={choosenWord}
            onComplete={handleRowComplete}
          />
        ))}
      </Grid>
      <Typography>
        {rightGuess ? "Guessed word correctly!" : "Word is wrong"}
      </Typography>
    </>
  );
};

export default WordleGrid;
