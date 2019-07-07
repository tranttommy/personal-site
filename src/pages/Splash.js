import React, { PureComponent } from 'react';
import { SplashSection, SplashLink } from '../components/styles';
import Logo from '../components/splash/logo';

export default class Splash extends PureComponent {
  state = {
    animate: true
  }

  finishAnimation = () => this.setState({ animate: false })

  render() {
    return (
      <SplashSection onClick={this.finishAnimation} {...this.state}>
        <Logo {...this.state} />
        <h1><span>TOMMY</span> <span>TRAN</span></h1>
        <nav>
          <ul>
            <li>
              <SplashLink to="/about">
                About
              </SplashLink>
            </li>
            <li>
              <SplashLink to="/projects">
                Projects
              </SplashLink>
            </li>
            <li>
              <SplashLink to="/contact">
                Contact
              </SplashLink>
            </li>
          </ul>
        </nav>
      </SplashSection>
    );
  }
}
