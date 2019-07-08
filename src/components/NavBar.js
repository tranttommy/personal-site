import React from 'react';
import { Nav, StyledNavLink } from './styles';

export default function NavBar() {
  return (
    <Nav animate={true}>
      <ul>
        <li>
          <StyledNavLink to="/">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            Contact
          </StyledNavLink>
        </li>
      </ul>
    </Nav>
  );
}
