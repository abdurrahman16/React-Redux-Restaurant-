import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';



const NavigationComponent = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

    <Navbar color="dark" dark expand="md"> 
      <NavbarBrand href="/">
      🌸Sakura Restaurent🌸
      </NavbarBrand>

        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>🌸🌸🌸</NavbarText>
        </Collapse>
      </Navbar>

     </div>
  )
}

export default NavigationComponent