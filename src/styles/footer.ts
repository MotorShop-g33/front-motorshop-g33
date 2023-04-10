import styled from "styled-components";

export const Footer = styled.footer`
  color: var(--white-fixed);
  background-color: var(--gray-0);
  height: 160px;
  display: flex;
  justify-content: space-between;
  padding: 56px 60px 56px 60px;

  #scroll_up {
    background-color: var(--gray-1);
    height: 50px;
    width: 53px;
    padding: 20px;
    border-radius: 4px;
  }

  p {
    padding-top: 10px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 60px;
    height: 310px;
  }
`;
