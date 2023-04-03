import {createGlobalStyle} from 'styled-components';
import circle from '../assets/shape.svg'

export const GlobalStyles = createGlobalStyle`
    body {
        background: top left no-repeat url(${circle}) #EAF2F2;
    }

    * {
        margin: 0px;
        padding: 0px;
    }

    div, h1, h2, p {
        font-family: Arial, Helvetica, sans-serif;
  }
`;