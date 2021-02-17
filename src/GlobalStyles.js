import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    font-family:sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    margin:0 !important;
  }
    
    ::-webkit-scrollbar {
      display:none;
    }

  h1,h2,h3,h4,h5,h6 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    margin-block-start: 0 !important; 
    margin-block-end: 0 !important;
  }
`

export default GlobalStyle
