import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    line-height: 140%;
  }
  
  body {
    background: #1E1E1E;
    margin: 0 16px;
    -webkit-font-smoothing: antialiased;
  }
`