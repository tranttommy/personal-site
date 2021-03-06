import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Splash from '../pages/Splash';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:any" render={() => (
          <>
            <NavBar />
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Switch>
          </>
        )} />
        <Route path="/" component={Splash} />
      </Switch>
    </Router>
  );
}
