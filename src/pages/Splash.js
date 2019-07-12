import React, { PureComponent } from 'react';
import { SplashMain, StyledNavLink } from '../components/styles';
import Logo from '../components/Logo';

export default class Splash extends PureComponent {
  state = {
    animate: true
  }

  finishAnimation = () => this.setState({ animate: false })

  render() {
    return (
      <SplashMain onClick={this.finishAnimation} {...this.state}>
        <Logo {...this.state} />
        <h1><span>TOMMY</span> <span>TRAN</span></h1>
        <nav>
          <ul>
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
        </nav>
      </SplashMain>
    );
  }
}
