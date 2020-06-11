import React from 'react';
import Typing from 'react-typing-animation';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';
import imag from '../images/clement.png';

const Main = () => {
  const CardStyle = { backgroundColor: 'rgba(0,0,0,0.1)' };
  const CardStyle2 = { backgroundColor: 'rgba(255,255,255,0.5)' };
  const CardClass = ['light'];
  return (
    <>
      <MDBContainer
        className=' mt-5 pt-5 justify-content-center'
        size='sm'
        style={{ minHeight: '18em' }}
      >
        <MDBCard
          size='md'
          className='p-2'
          style={{
            display: 'inline blockblock',
            backgroundColor: 'rgba(0,0,0,0.1)',
            width: '25vw',
          }}
        >
          <div className='mx-auto'>
            <img
              src={imag}
              alt=''
              height='80px'
              width='80px'
              style={{
                borderRadius: '50%',
                border: '1px doted #fff',
                ...CardStyle2,
              }}
            />
          </div>
          <div>
            Hi,
            <div>
              I am a{' '}
              <div
              // style={{ display: 'ínline', marginLeft: '5rem' }}
              >
                <Typing cursorClassName='accent'>
                  <span>Sofware Developer</span>
                  <br />
                  <span>Front-End Development</span>
                  <br />
                  <span>Cloud Engineer</span>
                </Typing>
              </div>
            </div>
          </div>
        </MDBCard>
      </MDBContainer>
      <MDBContainer
        // style={container}
        className=''
        fluid
        //   style={{ height: '100vh' }}
      >
        <MDBRow className='p-2'>
          <MDBCol md='6' className='p-2' style={{}}>
            <MDBCard className='text-white p-2' style={CardStyle}>
              <MDBCardTitle>Latest Blog</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  nam nostrum est. Sed, vel dolorum voluptates sunt ab modi
                  laboriosam ex, nisi quidem, facilis dolorem nemo sint rerum
                  harum aspernatur!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='p-2'>
            <MDBCard className=' text-white p-2' style={CardStyle}>
              <MDBCardTitle>Twitter</MDBCardTitle>
              <MDBCardBody>
                <MDBCardText className='text-white'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  nam nostrum est. Sed, vel dolorum voluptates sunt ab modi
                  laboriosam ex, nisi quidem, facilis dolorem nemo sint rerum
                  harum aspernatur!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBBtn
          //   tabindex
          tag='a'
          size='lg'
          className='btn-floating'
          style={{
            borderRadius: '50%',
            height: '50px',
            width: '50px',
            position: 'fixed',
            bottom: '45px',
            right: '24px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            //   display: 'inline-block',
            padding: 0,
            margin: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            backgroundColor: '#00ffff',
          }}
          // gradient='purple'
        >
          <MDBIcon
            icon='envelope'
            style={{
              fontSize: '1.625rem',
              lineHeight: '50px',
            }}
          />
        </MDBBtn>
      </MDBContainer>
    </>
  );
};

export default Main;
