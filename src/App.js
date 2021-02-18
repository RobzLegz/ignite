import React from 'react';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Home from './Home';

const App = () => {

  return (
    <div className="app">
      <Header />
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;

