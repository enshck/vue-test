import { injectGlobal } from "vue-styled-components";

const GlobalStyle = injectGlobal`
  html,
  body,
  main {
  overflow-y: visible !important;
	overflow-x: hidden;
	height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  }
  input, 
  textarea {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
