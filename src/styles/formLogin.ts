import styled from "styled-components";

export const LoginForm = styled.form`
  width: 95%;
  max-width: 412px;
  height: 542px;
  margin: 0 auto;
  background-color: var(--white-fixed);
  border-radius: 4px;
  padding: 1rem;
  margin: 0 1rem;

  h5 {
    margin-bottom: 32px;
  }

  .forgotPassword {
    padding-left: 160px;
    margin-bottom: 21px;
  }

  .errorMessage {
    color: red;
  }
  .noAcount {
    margin: 0 auto;
    margin-top: 24px;
  }

  .linkRegister {
    margin-top: 24px;
    height: 48px;
    border: 1px solid var(--gray-4);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    background-color: var(--white-fixed);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .linkRegister:hover {
    transition: 600ms;
    background-color: var(--gray-0);
    border: 1px solid var(--gray-0);
    color: var(--white-fixed);
  }
  label {
    margin-top: 20px;
  }
`;
