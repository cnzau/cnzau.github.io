import React from 'react';
import Jumbotron from './Jumbotron';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';

const Main = () => {
  const CardStyle = { backgroundColor: 'rgba(0,0,0,0.1)' };
  const CardStyle2 = { backgroundColor: 'rgba(255,255,255,0.5)' };
  const CardClass = ['light'];
  return (
    <>
      <Jumbotron />
      <MDBContainer className='' fluid>
        <MDBRow className='p-2'>
          <MDBCol md='6' className='p-2' style={{}}>
            <MDBCard className='text-white p-2' style={CardStyle}>
              <MDBCardTitle>Latest Blog</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  <p>
                    I will be publishing on this platform soon. Frequently visit
                    this site for more.
                  </p>
                  <p>
                    Meanwhile, check out my previous blogs from{' '}
                    <u>
                      <a
                        href='https://medium.com/@cnzau'
                        target='_BLANK'
                        rel='noopener noreferrer'
                        className='text-white'
                      >
                        medium
                      </a>
                    </u>
                    .
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='p-2'>
            <MDBCard className=' text-white p-2' style={CardStyle}>
              <MDBCardTitle>Twitter</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  <p>Checkout my latest tweets or re-tweets.</p>
                  <p>
                    <small>
                      FYI: I am more active on twitter than on facebook
                      <span aria-label='wink' role='img'>
                        &#x1F609;
                      </span>
                      .
                    </small>
                  </p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Main;
