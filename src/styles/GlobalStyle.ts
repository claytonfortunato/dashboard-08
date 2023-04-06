import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: ${(props) => props.theme.background.main};
        width: 100%;
        height:100vh;
        display: flex;
        justify-content:center;
        align-items:center;

    }
`;
