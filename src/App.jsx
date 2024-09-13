import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aquamarine;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: black;
  padding: 20px;
`;

export default function App() {
  return (
    <StyledApp>
      <H1>Hello world</H1>
      <Button>Check in</Button>
      <Button>Check out</Button>

      <Input type="number" placeholder="Number of guest" />
    </StyledApp>
  );
}
