import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landingpage from './Landingpage';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import Project from './Projects';

let Main=()=>{
    return(
      <div>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Project} />
          </Switch>
      </div>
    );
  }

  export default Main;
  