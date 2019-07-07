import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../pages/Splash';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { Main } from './styles';

export default function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Splash} />
        </Switch>
      </Main>
    </Router>
  );
}
