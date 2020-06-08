import React from 'react';
import Default from './layouts/Default';
import './App.scss';

function App() {
  return (
    <>
      <div className='App'>
        <Default />
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0,
          }}
        >
          <header>
            <div className='brand'>
              clement <br />
              nzau <br />
              timothy
            </div>
          </header>
          <div>
            <p>Hi,</p>
            <p>
              I am a<b className='is-visible'> Sofware Developer</b>
              <b> Front-End Developer</b>
              <b> Cloud Enginer</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
