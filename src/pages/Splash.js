import React, { PureComponent } from 'react';
import { SplashMain, TechSpan, StackSpan, ProjectsSpan, ContactSpan, AboutSpan } from '../components/styles';
import Logo from '../components/splash/logo';

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
              <AboutSpan {...this.state}>About</AboutSpan>
            </li>
            <li>
              <TechSpan {...this.state}>Tech</TechSpan> <StackSpan {...this.state}>Stack</StackSpan>
            </li>
            <li>
              <ProjectsSpan {...this.state}>Projects</ProjectsSpan>
            </li>
            <li>
              <ContactSpan {...this.state}>Contact</ContactSpan>
            </li>
          </ul>
        </nav>
      </SplashMain>
    );
  }
}
