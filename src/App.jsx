import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">The oak nest</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button>Check in</Button>
            <Button>Check out</Button>
          </div>
        </Row>

        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guest" />
            <Input type="number" placeholder="Number of guest" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
