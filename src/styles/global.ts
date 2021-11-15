import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange-gradient: linear-gradient(90deg, rgba(255,97,96,1) 0%, rgba(255,97,220,1) 100%);
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }
    h1, h1, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button, a {
        cursor: pointer;
    }
`;
