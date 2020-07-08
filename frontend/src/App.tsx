import * as React from 'react';
import DemandsList from './components/DemandsList';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  return (
    <React.Fragment>
      <DemandsList />
      <GlobalStyle />
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default App;
