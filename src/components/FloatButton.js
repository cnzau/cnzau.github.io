import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact';

const FloatButton = () => {
  return (
    <MDBBtn
      tag='a'
      href='/contact'
      size='lg'
      className='btn-floating '
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
        padding: 0,
        margin: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        backgroundColor: '#00ffff',
      }}
    >
      <MDBIcon
        icon='envelope'
        style={{
          fontSize: '1.625rem',
          lineHeight: '50px',
        }}
      />
    </MDBBtn>
  );
};

export default FloatButton;
