import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0 70px 0;

  width: 100%;

  font-family: "Lexend", sans-serif;
  font-style: normal;

  color: var(--gray-1);
  background: linear-gradient(
    to bottom,
    var(--brand-1) 350px,
    var(--gray-7) 350px
  );

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  @media screen and (max-width: 1060px) {
    gap: 1rem;
  }
`;

export const PrimarySection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  width: auto;

  @media screen and (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }
`;

export const ProductSection = styled.section`
  width: 54vw;
  padding-right: 2vw;

  @media screen and (max-width: 1060px) {
    padding: 0;
  }

  @media screen and (max-width: 750px) {
    padding: 0 2vw 0 2vw;
    width: inherit;
  }
`;

export const ProductMainImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  height: 355px;

  background: var(--gray-10);
  border-radius: 4px;

  img {
    height: 100%;
  }

  @media screen and (max-width: 750px) {
    img {
      width: inherit;
      height: 80%;
    }
  }
`;

export const InfoProduct = styled.div`
  padding: 36px 44px;
  margin-bottom: 40px;
  border-radius: 4px;

  background: var(--gray-10);

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: var(--gray-1);
  }

  .frame-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 24px;
  }

  .frame-tags {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .tags {
    padding: 4px 8px;
    border-radius: 4px;

    height: max-content;
    width: max-content;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--random-13);
    background: var(--brand-4);
  }

  .purchase-button {
    color: var(--white-fixed);
    background: var(--brand-1);
  }

  @media screen and (max-width: 750px) {
    padding: 36px 26px;
    height: 330px;

    div {
      height: 65%;
    }

    .frame-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 35px;
      margin-bottom: 32px;
    }

    .purchase-button {
      margin-bottom: 32px;
    }
  }
`;

export const DescriptionProduct = styled.div`
  padding: 36px 44px;
  margin-bottom: 16px;
  background: var(--gray-10);

  border-radius: 4px;

  h1 {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 750px) {
    padding: 36px 26px;
  }
`;

export const SecondarySection = styled.section`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  width: 86%;
  margin: 0 auto;

  @media screen and (max-width: 1060px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 750px) {
    margin: 0;
    width: inherit;
  }
`;

export const CommentsProduct = styled.section`
  width: 54vw;
  padding: 0 2vw 0 0;

  @media screen and (max-width: 1060px) {
    width: 54vw;
    padding: 0;
  }

  @media screen and (max-width: 750px) {
    padding: 0 2vw 0 2vw;
    width: auto;
  }
`;

export const Comments = styled.div`
  padding: 36px 44px;
  margin-bottom: 33px;
  background: var(--gray-10);

  border-radius: 4px;

  .comments-h1 {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 750px) {
    padding: 36px 26px;
  }
`;

export const AddComments = styled.div`
  padding: 36px 44px;
  background: var(--gray-10);
  min-height: 150px;
  border-radius: 4px;

  @media screen and (max-width: 750px) {
    padding: 36px 26px;
  }
`;

export const InfoSection = styled.section`
  height: min-content;
  width: 30vw;

  @media screen and (max-width: 1060px) {
    width: 54vw;
  }

  @media screen and (max-width: 750px) {
    width: auto;
    padding: 0 2vw;
    margin-bottom: 18px;
  }
`;

export const ProductPhotos = styled.div`
  padding: 36px 44px;
  margin-bottom: 33px;
  background: var(--gray-10);

  border-radius: 4px;

  h1 {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 750px) {
    padding: 36px 38px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 44px;
  gap: 15px;
  background: var(--gray-10);

  border-radius: 4px;

  span {
    font-size: 14px;
    text-align: justify;
  }

  .profileLink {
    color: var(--white-fixed);
    background: var(--gray-0);
    margin: 25px auto 0px;
    padding: 15px 20px;
    border-radius: 5px;
  }
`;
