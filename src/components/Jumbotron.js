import React from 'react';
import Typing from 'react-typing-animation';
import TextLoop from 'react-text-loop';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';
import portrait from '../images/clement.png';

const Jumbotron = () => {
  const CardStyle2 = { backgroundColor: 'rgba(255,255,255,0.5)' };
  return (
    <MDBContainer
      className=' mt-5 pt-5 align-items-center'
      size='sm'
      style={{ minHeight: '50vh' }}
    >
      <MDBCard
        size='md'
        className='p-2 mx-auto'
        style={{
          // display: 'inline blockblock',
          backgroundColor: 'rgba(0,0,0,0.1)',
          width: '40vw',
        }}
      >
        <div className='mx-auto'>
          <img
            src={portrait}
            alt=''
            height='100px'
            style={{
              borderRadius: '50%',
              border: '1px doted #fff',
              ...CardStyle2,
            }}
          />
        </div>
        <div>
          <Typing cursorClassName='my-accent-color' speed={1}>
            <p>Hi, </p>
            <Typing.Delay ms={500} />
            <h6>I am: Clement Nzau.</h6>
            <Typing.Delay ms={500} />
            <h6>
              I am a{' '}
              <TextLoop>
                <span>Sofware Engineer</span>
                <span>Front-End Engineer</span>
                <span>Cloud Engineer</span>
                <span>Techie</span>
              </TextLoop>
            </h6>
          </Typing>
        </div>
      </MDBCard>
    </MDBContainer>
  );
};

export default Jumbotron;
