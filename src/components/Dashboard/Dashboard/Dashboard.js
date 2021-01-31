// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default Dashboard;

import { useState } from "react";
import "./Dashboard.css";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accounts from "../Accounts/Accounts";
import Appointment from "../Appointment/Appointment";
// import Attendance from "../../../../Attendance/Attendance";
import Clients from "../Clients/Clients";
import Department from "../Department/Department";
import Employees from "../Employees/Employees";
import Notes from "../Notes/Notes";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import Projects from "../Projects/Projects";
import Settings from "../Settings/Settings";
import Supports from "../Supports/Supports";
import Task from "../Task/Task";
import AddProjects from "../Projects/AddProjects";
import CompletedProjects from "../Projects/CompletedProjects";
import ProjectTimeline from "../Projects/ProjectTimeline";
import InprogressProjects from "../Projects/InprogressProjects";
import RejectedProjects from "../Projects/RejectedProjects";
import TimeOutProjects from "../Projects/TimeOutProjects";
import TotalProjects from "../Projects/TotalProjects";
import AddDepartment from "../Department/AddDepartment";
import DepartmentList from "../Department/DepartmentList";
import AddClients from "../Clients/AddClients";
import TotalClients from "../Clients/TotalClients";

const Dashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="containers">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        {/* <Main /> */}
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Switch>
          <Route exact path="/">
            <Main />{" "}
          </Route>
          <Route exact path="/dashboard">
            <Main />{" "}
          </Route>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/attendance">
            {/* <Attendance /> */}
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          {/* <Route path="/department">
            <Department />
          </Route> */}
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/notice-board">
            <NoticeBoard />
          </Route>
          {/* <Route path="/projects">
            <Projects />
          </Route> */}
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/supports">
            <Supports />
          </Route>
          <Route path="/task">
            <Task />
          </Route>

          {/* Projects Route        */}
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
          <Route path="/projects/totalProjects">
            <TotalProjects />
          </Route>

          {/* Department Route        */}
          <Route exact path="/department/add-department">
            <AddDepartment />
          </Route>
          <Route path="/department/department-list">
            <DepartmentList />
          </Route>

          {/* Clients Route        */}
          <Route exact path="/clients/add-clients">
            <AddClients />
          </Route>
          <Route path="/clients/total-clients">
            <TotalClients />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
