import React from 'react';
import './Default.scss';
import Main from '../components/Main';
import Footer from '../components/Footer';
import FloatButton from '../components/FloatButton';
import NavbarPage from '../components/NavbarPage';

const Default = () => {
  return (
    <>
      <ul className='cb-slideshow'>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
      </ul>
      <NavbarPage />
      <Main />
      <FloatButton />
      <Footer />
    </>
  );
};

export default Default;
