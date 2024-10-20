import styled from "styled-components";

interface KeyProps {
  keyValue: any;
}

const Key = ({ keyValue }: KeyProps) => {
  return <StyledKey>{keyValue}</StyledKey>;
};

export default Key;

const StyledKey = styled.div`
  width: 50px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
`;
