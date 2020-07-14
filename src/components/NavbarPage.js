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

const NavbarPage = () => {
  const [state, setState] = useState({
    collapse: false,
    collapseID: '',
  });

  const toggleSingleCollapse = (collapseId) => {
    setState({
      ...state,
      [collapseId]: !state[collapseId],
    });
  };

  return (
    <header>
      <MDBNavbar
        dark
        color={state.collapse ? 'elegant-color' : ''}
        expand='md'
        className='z-depth-0'
        scrolling
        fixed='top'
      >
        <MDBNavbarBrand href='/'>
          <div className='brand bg-1 z-depth-1 hoverable'>
            clement <br />
            nzau <br />
            timothy
          </div>
        </MDBNavbarBrand>
        <MDBHamburgerToggler
          id='hamburger1'
          onClick={() => toggleSingleCollapse('collapse')}
        />
        <MDBCollapse isOpen={state.collapse} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                to='/home'
                onClick={
                  state.collapse ? () => toggleSingleCollapse('collapse') : null
                }
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to='/contact'
                onClick={
                  state.collapse ? () => toggleSingleCollapse('collapse') : null
                }
              >
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to='/work'
                onClick={
                  state.collapse ? () => toggleSingleCollapse('collapse') : null
                }
              >
                Work
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
};

export default NavbarPage;
