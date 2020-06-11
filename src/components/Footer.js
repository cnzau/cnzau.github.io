import React from 'react';
import { MDBIcon, MDBBtn, MDBContainer } from 'mdbreact';

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
          <MDBIcon fab icon='facebook' size='2x' />
        </a>
        <a
          href='https://twitter.com/clement_nzau'
          target='_BLANK'
          rel='noopener noreferrer'
          className='p-2'
        >
          <MDBIcon fab icon='twitter' size='2x' />
        </a>
        <div className='my-3'>
          &copy; <span id='yr'>2020</span> &nbsp; Clement Nzau Timothy.
        </div>
      </MDBContainer>
      {/* <ul className='nav justify-content-center' id='social-links'>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='https://ke.linkedin.com/in/clementnzau'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin-in fa-2x'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='https://github.com/cnzau'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <i class='fab fa-github fa-2x'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='http://stackoverflow.com/users/6154384/c-nzau'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <MDBIcon fab icon='stack-overflow' />
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='https://medium.com/@cnzau'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <i class='fab fa-medium-m fa-2x'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='https://www.facebook.com/nzauclement'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <i class='fab fa-facebook fa-2x'></i>
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link'
            href='https://twitter.com/clement_nzau'
            target='_BLANK'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter fa-2x'></i>
          </a>
        </li>
      </ul>
      &copy; <span id='yr'>2020</span> &nbsp; Clement Nzau Timothy. */}
    </footer>
  );
};

export default Footer;
