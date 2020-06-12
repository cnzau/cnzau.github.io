import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBHamburgerToggler,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const NavbarPage = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <Router>
      <header>
        <MDBNavbar
          dark
          color={collapse && 'elegant-color'}
          expand='md'
          className='z-depth-0'
          scrolling
          fixed='top'
        >
          <MDBNavbarBrand href='/'>
            <div className='brand z-depth-1 hoverable'>
              clement <br />
              nzau <br />
              timothy
            </div>
          </MDBNavbarBrand>
          <MDBHamburgerToggler id='hamburger1' onClick={toggle} />
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to='#!'>Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='#!'>About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='#!'>Work</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </Router>
  );
};

export default NavbarPage;
