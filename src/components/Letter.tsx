import styled from "styled-components";

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

const Letter = ({ letterPosition, attemptValue }: LetterProps) => {
  return <StlyedLetter>Letter</StlyedLetter>;
};

export default Letter;

const StlyedLetter = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid grey;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
`;
