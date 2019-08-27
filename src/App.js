import React from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from './reset.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Works!</h1>
    </>
  );
}

export default hot(App);
