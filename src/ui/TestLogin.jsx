import styled from "styled-components";

const StyledLogin = styled.div`
  height: 12rem;
  width: 40rem;
  margin-top: auto;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-grey-0);
  font-size: 1.4rem;
`;

export default function TestLogin() {
  return (
    <StyledLogin>
      <h3>Test it !</h3>
      <p>Email address: tixih88452@nestvia.com </p>
      <p>Password: 12345678</p>
    </StyledLogin>
  );
}
