import React from 'react';
import {
  MDBContainer,
  MDBLink,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
} from 'mdbreact';

const NotFound = () => {
  return (
    <MDBContainer
      className='text-center my-5 pt-5'
      style={{ minHeight: '70vh' }}
    >
      <MDBCard className='bg-1 white-text'>
        <MDBCardTitle as={'h3'} className='mt-4'>
          Page Not Found
        </MDBCardTitle>
        <MDBCardBody className=''>
          <p className='lead'>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>

          <MDBLink className='my-accent-color my-5' to='/home'>
            Go to Home page
          </MDBLink>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default NotFound;
