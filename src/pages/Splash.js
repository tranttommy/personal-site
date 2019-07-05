import React, { PureComponent } from 'react';
import { SplashMain, TechSpan, StackSpan, ProjectsSpan, ContactSpan, AboutSpan, SplashLink } from '../components/styles';
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
              <SplashLink to="/about">
                <AboutSpan {...this.state}>About</AboutSpan>
              </SplashLink>
            </li>
            <li>
              <SplashLink to="/techstack">
                <TechSpan {...this.state}>Tech</TechSpan> <StackSpan {...this.state}>Stack</StackSpan>
              </SplashLink>
            </li>
            <li>
              <SplashLink to="/projects">
                <ProjectsSpan {...this.state}>Projects</ProjectsSpan>
              </SplashLink>
            </li>
            <li>
              <SplashLink to="/contact">
                <ContactSpan {...this.state}>Contact</ContactSpan>
              </SplashLink>
            </li>
          </ul>
        </nav>
      </SplashMain>
    );
  }
}
