import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import TextLoop from 'react-text-loop';
import { MDBContainer, MDBCard } from 'mdbreact';
import portrait from '../images/clement.png';

const Jumbotron = () => {
  const CardStyle2 = { backgroundColor: 'rgba(255,255,255,0.5)' };
  return (
    <MDBContainer
      className=' mt-5 pt-5 align-items-center'
      size='sm'
      style={{ height: 'calc(100vh - 58px)', position: 'relative' }}
      fluid
    >
      <MDBCard size='md' className='intro px-2 py-1 bg-1'>
        <div className=''>
          <img
            src={portrait}
            className='my-2'
            alt=''
            height='50px'
            style={{
              borderRadius: '50%',
              border: '1px doted #fff',
              ...CardStyle2,
            }}
          />
          <div
            className='mx-2 px2'
            style={{ display: 'inline-flex', verticalAlign: 'middle' }}
          >
            <Typing cursorClassName='my-accent-color' speed={1}>
              <span>Hi, </span>
              <Typing.Delay ms={500} />
              <p>I am Clement Nzau.</p>
            </Typing>
          </div>
        </div>
      </MDBCard>
      <div
        style={{
          position: 'absolute',
          top: '36%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '50px',
          lineHeight: 1,
        }}
      >
        <h3
          className='text-center'
          style={{
            fontSize: '50px',
            lineHeight: 1,
          }}
        >
          I build amaizing experiences
        </h3>
        <ul className='txt-slideshow'>
          <li>
            <div>
              <p>Software Engineer</p>
            </div>
          </li>
          <li>
            <div>
              <p>Front-End Engineer</p>
            </div>
          </li>
          <li>
            <div>
              <p>Cloud Engineer</p>
            </div>
          </li>
          <li>
            <div>
              <p>Tech Enthusiast</p>
            </div>
          </li>
        </ul>
      </div>

      <a href='#' className='scroll-down'>
        <div className='mouse'>
          <span></span>
        </div>
        <div className='arrow'>
          <span></span>
        </div>
      </a>
      {/* </div> */}
    </MDBContainer>
  );
};

export default Jumbotron;
