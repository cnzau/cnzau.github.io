import React from 'react';
import './Default.scss';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Default = () => {
  return (
    <>
      <ul class='cb-slideshow'>
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
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Default;
