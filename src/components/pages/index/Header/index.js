
import logoprata from '../../img/abcd.gif'
import {
 Header,Figure,Image,Container,H1,Nav,
} from './style.js'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, } from 'reactstrap';
import React, { useState } from 'react';
export const SHeader = () => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
  return (
    <Header className='p-2'>
      <Container>
        <Navbar  light expand="md" className="d-flex justify-content-between align-items-center ">
          <NavbarBrand href="/">
            <Figure>
              <Image src = {logoprata} width={130} height={90}/>
            </Figure>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className=''>
            <Nav className="" navbar>
              <H1>CAUÃ BERNARDINO LIMA</H1> 
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </Header>
  );
}