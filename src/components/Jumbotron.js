import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import TextLoop from 'react-text-loop';
import { MDBContainer, MDBCard } from 'mdbreact';
import portrait from '../images/clement.png';

const Jumbotron = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const CardStyle2 = { backgroundColor: 'rgba(255,255,255,0.5)' };
  return (
    <MDBContainer
      className=' mt-5 pt-5 align-items-center'
      size='sm'
      style={{ height: 'calc(100vh - 58px)', position: 'relative' }}
    >
      <MDBCard
        size='md'
        className='p-3 mx-auto bg-1'
        style={{
          width: '50%',
          position: 'absolute',
          top: '35%',
          left: '50%',
          '-webkit-transform': 'translate(-50%,-50%)',
          '-ms-transform': 'translate(-50%,-50%)',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <div className=''>
          <img
            src={portrait}
            className='my-2'
            alt=''
            height='100px'
            style={{
              borderRadius: '50%',
              border: '1px doted #fff',
              ...CardStyle2,
            }}
          />
          <div className='mx-2 px2' style={{ display: 'inline-flex' }}>
            <Typing
              cursorClassName='my-accent-color'
              onFinishedTyping={handleShow}
              speed={1}
            >
              <p>Hi, </p>
              <Typing.Delay ms={500} />
              <h6 className='my-3'>I am Clement Nzau.</h6>
            </Typing>
          </div>
          <div
            style={{
              display: show ? 'block' : 'none',
              transitionProperty: 'all',
              transitionDuration: '0.35s',
              transitionTimingunction: 'ease',
              transitionDelay: '0s',
            }}
          >
            <h2 className='my-5'>
              <TextLoop>
                <span>Sofware Engineer</span>
                <span>Front-End Engineer</span>
                <span>Cloud Engineer</span>
                <span>Techie</span>
              </TextLoop>
            </h2>
          </div>
        </div>
      </MDBCard>
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
