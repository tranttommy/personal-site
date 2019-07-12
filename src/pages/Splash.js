import React, { PureComponent } from 'react';
import { SplashMain, StyledNavLink, NameH1 } from '../components/styles';
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
        <NameH1 {...this.state}>
          <span>TOMMY</span> <span>TRAN</span>
        </NameH1>
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
