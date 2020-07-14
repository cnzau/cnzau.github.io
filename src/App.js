import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Default from './layouts/Default';
import './App.scss';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Default />
        </Router>
      </div>
    </>
  );
}

export default App;
