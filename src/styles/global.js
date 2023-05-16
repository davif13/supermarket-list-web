import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: url("./fonts/AvenirNext-Regular.otf");
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url("./fonts/AvenirNext-Bold.otf");
    font-weight: bold;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url("./fonts/AvenirNext-Medium.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url("./fonts/AvenirNext-It.otf");
    font-style: italic;
  }


  body {
    margin: 0;
    font-family: 'Avenir Next',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1 {
    font-weight: bold;
    font-size: 1.3rem;
    color: #000000;
    line-height: 22px;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0px;
    padding: 0px;
  }

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }
`
