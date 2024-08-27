import { Grid, TextField, styled } from "@mui/material";
import { useRef, useEffect } from "react";

const GridRow = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;

    if (value.length === 1 && index < 4) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
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
            backgroundColor: "#eee",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          <StyledTextField
            inputRef={(el: HTMLInputElement | null) =>
              (inputRefs.current[index] = el)
            }
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => handleChange(index, e)}
            inputProps={{ maxLength: 1 }}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (!/^[a-zA-Z]$/.test(e.key)) {
                e.preventDefault();
              }
              handleKeyDown(index, e);
            }}
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
    backgroundColor: "#a4d2b0",
    transition: "background-color 0.3s",
    "&.Mui-focused": {
      backgroundColor: "#ADD8E6",
    },
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
