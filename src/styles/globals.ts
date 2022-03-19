import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        background: #EEF6FF;
        width: 100%;
        min-height: 100vh;
    }
    @media (max-width: 1000px) {
        html {
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
    button {
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #0078D8;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export { GlobalStyle };
