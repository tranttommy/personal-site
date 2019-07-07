import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../pages/Splash';
import About from '../pages/About';
import TechStack from '../pages/TechStack';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/techstack" component={TechStack} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Splash} />
      </Switch>
    </Router>
  );
}
