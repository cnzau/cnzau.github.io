import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Footer = () => {
  return (
    <footer className='py-4' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <MDBContainer className='text-center'>
        <a
          href='https://ke.linkedin.com/in/clementnzau'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='linkedin-in' size='2x' />
        </a>
        <a
          href='https://github.com/cnzau'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='github' size='2x' />
        </a>
        <a
          href='http://stackoverflow.com/users/6154384/c-nzau'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='stack-overflow' size='2x' />
        </a>
        <a
          href='https://medium.com/@cnzau'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='medium-m' size='2x' />
        </a>
        <a
          href='https://www.facebook.com/nzauclement'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='facebook-f' size='2x' />
        </a>
        <a
          href='https://twitter.com/nzau_clement'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='twitter' size='2x' />
        </a>
        <p className='my-3'>
          <small>
            &copy; <span id='yr'>2020</span> &nbsp; Clement Nzau Timothy.
          </small>
        </p>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
