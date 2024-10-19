import { Grid, TextField, styled } from "@mui/material";
import { useRef, useEffect, useState } from "react";

type GridRowProps = {
  isFirstRow: boolean;
  randomWord: string;
  onComplete: (word: string) => void;
};

const GridRow = ({ isFirstRow, onComplete }: GridRowProps) => {
  const [letters, setLetters] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isFirstRow && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [isFirstRow]);

  const handleChange = (index: number, value: string) => {
    const newLetters = [...letters];
    newLetters[index] = value.toLowerCase();
    setLetters(newLetters);

    if (value.length === 1 && index < 4) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (newLetters.every((letter) => letter !== "")) {
      onComplete(newLetters.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "Backspace") {
      const currentInput = inputRefs.current[index];
      if (currentInput && currentInput.value === "") {
        event.preventDefault();
        if (index > 0) {
          const previousInput = inputRefs.current[index - 1];
          if (previousInput) {
            previousInput.focus();
            previousInput.value = "";
          }
        }
      }
    }
  };

  return (
    <Grid container gap={2} justifyContent={"center"}>
      {[...Array(5)].map((_, index) => (
        <Grid
          item
          xs={1.5}
          key={index}
          style={{
            height: "6rem",
            backgroundColor: "#bdbdbd",
            marginBottom: "1rem",
            // borderRadius: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          <StyledTextField
            inputRef={(el: HTMLInputElement | null) =>
              (inputRefs.current[index] = el)
            }
            onChange={(e) => handleChange(index, e.target.value)}
            inputProps={{ maxLength: 1 }}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
              handleKeyDown(index, e)
            }
            autoComplete="off"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridRow;

const StyledTextField = styled(TextField)({
  width: "100%",
  height: "100%",
  "& .MuiInputBase-root": {
    height: "100%",
    backgroundColor: "#bdbdbd",
    transition: "background-color 0.3s",
    // "&.Mui-focused": {
    //   backgroundColor: "#ADD8E6",
    // },
  },
  "& .MuiInputBase-input": {
    height: "100%",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "4rem",
    caretColor: "transparent",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
