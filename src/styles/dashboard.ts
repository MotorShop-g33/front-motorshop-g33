import styled from "styled-components";


export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Banner = styled.div`
    background-image: url("../src/assets/banner.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    width: 100%;
    min-height: 45vh;

    div {
        background-image: linear-gradient(to bottom,rgba(200,200,200,0.25),rgba(2,2,2,0.95));
        color: var(--white-fixed);
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        min-height: 45vh;
    }

    h1{
        font-size: 44px;
        font-weight: 700;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    width: 95%;
    padding: 25px 0px;

    aside {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        width: 25%;
        @media screen and (max-width: 750px) {
            display: none;
        }
        
    }

    section {
        width: 75%;
    }
`;