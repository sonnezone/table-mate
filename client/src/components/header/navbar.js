import React from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {useHistory} from "react-router-dom";

export default props => {
    const history = useHistory();

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
                history.push("/");
            }}
        >
            Table Mate
        </NavbarBrand>
        <NavbarToggler onClick={_ => {}}/>
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
