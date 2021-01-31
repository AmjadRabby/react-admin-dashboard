import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProjects from './AddProjects';
import CompletedProjects from './CompletedProjects';
import InprogressProjects from './InprogressProjects';
import ProjectTimeline from './ProjectTimeline';
import RejectedProjects from './RejectedProjects';
import TimeOutProjects from './TimeOutProjects';
import TotalProjects from './TotalProjects';

const Projects = () => {
    return (
      <div>
        <h1>This is Projects</h1>
        {/* <Router>
          <Switch>
            <Route exact path="/projects/addProjects">
              <AddProjects />
            </Route>
            <Route path="/projects/completedProjects">
              <CompletedProjects />
            </Route>
            <Route path="/projects/inprogressProjects">
              <InprogressProjects />
            </Route>
            <Route path="/projects/projectTimeline">
              <ProjectTimeline />
            </Route>
            <Route path="/projects/rejectedProjects">
              <RejectedProjects />
            </Route>
            <Route path="/projects/timeOutProjects">
              <TimeOutProjects />
            </Route>
            <Route path="/totalProjects">
              <TotalProjects />
            </Route>
          </Switch>
        </Router> */}
      </div>
    );
};

export default Projects;