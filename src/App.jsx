import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aquamarine;
`;

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello world</H1>
        <Button>Check in</Button>
        <Button>Check out</Button>

        <Input type="number" placeholder="Number of guest" />
      </StyledApp>
    </>
  );
}
export default App;
