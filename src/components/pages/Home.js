import React from 'react';
import Jumbotron from '../Jumbotron';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';

const Home = () => {
  return (
    <>
      <Jumbotron />
      <MDBContainer className='' fluid>
        <MDBRow className='p-2'>
          <MDBCol md='6' className='p-2' style={{}}>
            <MDBCard className='text-white p-2 bg-1'>
              <MDBCardTitle>Latest Blog</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  I will be publishing on this platform soon. Frequently visit
                  this site for more.
                </MDBCardText>
                <MDBCardText className='text-white'>
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
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='p-2'>
            <MDBCard className=' text-white p-2 bg-1'>
              <MDBCardTitle>Twitter</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  Checkout my latest tweets or re-tweets.
                </MDBCardText>
                <MDBCardText className='text-white'>
                  <small>
                    FYI: I am more active on twitter than on facebook
                    <span aria-label='wink' role='img'>
                      &#x1F609;
                    </span>
                    .
                  </small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
