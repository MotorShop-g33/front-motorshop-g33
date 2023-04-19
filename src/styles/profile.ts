import styled from "styled-components";

export const MainSection = styled.div`
  background: linear-gradient(to bottom, var(--brand-1) 350px, var(--gray-7) 350px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  button {
    background-color: var(--white-fixed);
    color: var(--brand-1);
    border: solid 1px var(--brand-1);

    font-size: 14px;
    font-weight: 500;
    margin: 10px 0px;
    border-radius: 5px;

    width: 120px;
    height: 35px;
  }

  button:hover {
    background-color: var(--brand-1);
    color: var(--white-fixed);
    border: solid 1px var(--brand-1);
  }
`;

export const Banner = styled.div`
  width: 80%;
  min-height: 45vh;
  background-color: var(--white-fixed);
  color: var(--brand-1);
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 1240px;
  margin-top: 50px;
  padding: 0px 50px;
  border-radius: 4px;

  h1 {
    font-size: 44px;
    font-weight: 700;
    text-align: left;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 95%;
  padding: 25px 0px;

  //TEMPORARIO
  h2 {
    margin: 0px 10px;
    font-size: 21px;
  }
`;
