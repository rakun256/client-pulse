import React from 'react';
import AppRouter from './router/AppRouter';
import AppHelmet from './utils/AppHelmet';

const App = () => {
  return (
    <>
      <AppHelmet /> 
      <AppRouter />
    </>
  );
};

export default App;