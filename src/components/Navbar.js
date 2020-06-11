import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const bgPink = {
      // backgroundColor: '#e91e63'
    };
    // const container = { height: 1300 };
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar
              style={bgPink}
              dark
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
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right className='z-depth-1'>
                  <MDBNavItem active>
                    <MDBNavLink to='#'>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#'>About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to='#'>Work</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default Navbar;
