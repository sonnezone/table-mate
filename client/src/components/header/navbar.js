import React from "react";
import {Col, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";

export default props => {
    const handleClickScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

  return (
    <Navbar  className="bg-full" expand="md">
        <NavbarBrand
            className="nav-brand"
            onClick={_ => {
                props.setPage(0);
            }}
        >
            Table Mate
        </NavbarBrand>
        <NavbarToggler onCLick={_ => {}}/>
        <Collapse isOpen={false} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem
                    className="nav-item" onClick={() => {
                        handleClickScroll('demo');
                    }}
                >
                    Demo
                </NavItem>
                <NavItem
                    className="nav-item" onClick={() => {
                    handleClickScroll('faq');
                }}
                >
                    FAQ
                </NavItem>
                <NavItem
                    className="nav-item" onClick={() => {
                    handleClickScroll('contact');
                }}
                >
                    Kontakt
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  );
};
