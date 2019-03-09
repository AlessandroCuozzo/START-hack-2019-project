import { Collapse, Navbar, NavbarNav, NavbarToggler, NavItem, NavLink, MDBNavbarBrand, MDBNavLink } from 'mdbreact';
import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isNavbarWideEnough: false
        };
    }

    onToggleClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };

    render() {
        return (
            <Navbar dark expand="md main-color-background" id="main-navbar" scrolling className="py-2">
                <MDBNavbarBrand className="py-0">
                    <MDBNavLink to="/" className="py-0">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} height="50" alt="swissdev-jobs-logo"
                            className="d-inline-block align-top" />
                    </MDBNavLink>
                </MDBNavbarBrand>
                {!this.state.isNavbarWideEnough && <NavbarToggler onClick={this.onToggleClick} />}
                <Collapse isOpen={this.state.collapse} navbar>
                    <NavbarNav right>
                        <NavItem className="mr-2 ml-1">
                            <NavLink to="/">Find a job</NavLink>
                        </NavItem>
                        <NavItem className="mr-2 ml-1">
                            <NavLink to="/">Settings</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
