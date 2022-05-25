import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyles;