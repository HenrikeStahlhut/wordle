import styled from "styled-components";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <StyledKeyboard>
      <KeyboardRow1>
        {keys1.map((keys) => {
          return <div>{keys}</div>;
        })}
      </KeyboardRow1>
      <KeyboardRow2>
        {keys2.map((keys) => {
          return <div>{keys}</div>;
        })}
      </KeyboardRow2>
      <KeyboardRow3>
        {keys3.map((keys) => {
          return <div>{keys}</div>;
        })}
      </KeyboardRow3>
    </StyledKeyboard>
  );
};

export default Keyboard;

const StyledKeyboard = styled.div`
  width: 700px;
  height: 300px;
  margin-top: 60px;
`;

const KeyboardRow1 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const KeyboardRow2 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

const KeyboardRow3 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;
