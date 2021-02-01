import "./Sidebar.css";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import useRootClose from "react-overlays/useRootClose";
import { FaAngleDown, FaAngleUp, FaHome } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const ref = useRef();

  const [department, setDepartment] = useState(false);
  const handleDepartmentClose = () => setDepartment(false);
  useRootClose(ref, handleDepartmentClose, {
    disabled: !department,
  });

  const [projects, setProjects] = useState(false);
  const handleProjectClose = () => setProjects(false);
  useRootClose(ref, handleProjectClose, {
    disabled: !projects,
  });

  const [clients, setClients] = useState(false);
  const handleClientsClose = () => setClients(false);
  useRootClose(ref, handleClientsClose, {
    disabled: !clients,
  });

  const [employees, setEmployees] = useState(false);
  const handleEmployeesClose = () => setEmployees(false);
  useRootClose(ref, handleEmployeesClose, {
    disabled: !employees,
  });

  const [task, setTask] = useState(false);
  const handleTaskClose = () => setTask(false);
  useRootClose(ref, handleTaskClose, {
    disabled: !task,
  });

  const [supports, setSupports] = useState(false);
  const handleSupportsClose = () => setSupports(false);
  useRootClose(ref, handleSupportsClose, {
    disabled: !supports,
  });
  const [accounts, setAccounts] = useState(false);
  const handleAccountsClose = () => setAccounts(false);
  useRootClose(ref, handleAccountsClose, {
    disabled: !accounts,
  });
  const [noticeBoard, setNoticeBoard] = useState(false);
  const handleNoticeBoardClose = () => setNoticeBoard(false);
  useRootClose(ref, handleNoticeBoardClose, {
    disabled: !noticeBoard,
  });

  const [attendance, setAttendance] = useState(false);
  const handleAttendanceClose = () => setAttendance(false);
  useRootClose(ref, handleAttendanceClose, {
    disabled: !attendance,
  });

  const [appointment, setAppointment] = useState(false);
  const handleAppointmentClose = () => setAppointment(false);
  useRootClose(ref, handleAppointmentClose, {
    disabled: !appointment,
  });

  const [settings, setSettings] = useState(false);
  const handleSettingsClose = () => setSettings(false);
  useRootClose(ref, handleSettingsClose, {
    disabled: !settings,
  });

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <Link to="/" className="sidebar__img text-danger">
          <img className="sidebar-logo img-fluid" src={logo} alt="logo" />
        </Link>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <NavLink
            exact
            to="/dashboard"
            className="text-decoration-none"
            activeClassName=""
          >
            <i className="fa fa-home"></i>
            {/* <FaHome/> */}
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="sidebar__link" onClick={() => setDepartment(true)}>
          <div className="d-flex">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <span className=""> Department</span>

            {department ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>
          {department && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li className="">
                  <NavLink
                    className="toggle-item-link"
                    to="/department/add-department"
                  >
                    <i className="fa fa-home"></i>
                    Add Department
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/department/department-list"
                  >
                    <i className="fa fa-home"></i>
                    Department List
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar__link" onClick={() => setProjects(true)}>
          <div className="d-flex">
            <i className="fa fa-user-secret " aria-hidden="true"></i>
            <span className=""> Projects</span>

            {projects ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {projects && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/addProjects"
                  >
                    <i className="fa fa-home"></i>
                    Add Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/totalProjects"
                  >
                    <i className="fa fa-home"></i>
                    Total Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/inprogressProjects"
                  >
                    <i className="fa fa-home"></i>
                    Inprogress Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/projectTimeline"
                  >
                    <i className="fa fa-home"></i>
                    Project Timeline
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/timeoutProjects"
                  >
                    <i className="fa fa-home"></i>
                    Timeout Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/completedProjects"
                  >
                    <i className="fa fa-home"></i>
                    Completed Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/projects/rejectedProjects"
                  >
                    <i className="fa fa-home"></i>
                    Rejected Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setClients(true)}>
          <div className="d-flex">
            <i className="fa fa-handshake-o"></i>
            <span className=""> Clients</span>
            {clients ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {clients && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/clients/add-clients"
                  >
                    <i className="fa fa-home"></i>
                    Add Clients
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/clients/total-clients"
                  >
                    <i className="fa fa-home"></i>
                    Total Clients
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setEmployees(true)}>
          <div className="d-flex">
            <i className="fa fa-archive"></i>
            <span className=""> Employees</span>
            {employees ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {employees && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/employees/add-employees"
                  >
                    <i className="fa fa-home"></i>
                    Add Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/employees/total-employees"
                  >
                    <i className="fa fa-home"></i>
                    Total Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/employees/employees-history"
                  >
                    <i className="fa fa-home"></i>
                    Employees History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/employees/salary-history"
                  >
                    <i className="fa fa-home"></i>
                    Salary History
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setTask(true)}>
          <div className="d-flex">
            <i className="fa fa-files-o"></i>
            <span className=""> Task</span>
            {task ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {task && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink className="toggle-item-link" to="/task/add-task">
                    <i className="fa fa-home"></i>
                    Add Task
                  </NavLink>
                </li>
                <li>
                  <NavLink className="toggle-item-link" to="/task/total-tasks">
                    <i className="fa fa-home"></i>
                    Total Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink className="toggle-item-link" to="/task/doing-tasks">
                    <i className="fa fa-home"></i>
                    Doing Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/task/time-out-tasks"
                  >
                    <i className="fa fa-home"></i>
                    Timeout Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/task/completed-tasks"
                  >
                    <i className="fa fa-home"></i>
                    Completed Tasks
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setSupports(true)}>
          <div className="d-flex">
            <i className="fa fa-user-secret " aria-hidden="true"></i>
            <span className=""> Supports</span>
            {supports ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {supports && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/support/support-request"
                  >
                    <i className="fa fa-home"></i>
                    Support Request
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/support/support-pending"
                  >
                    <i className="fa fa-home"></i>
                    Support Pending
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/support/completed-support"
                  >
                    <i className="fa fa-home"></i>
                    Completed Support
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setAccounts(true)}>
          <div className="d-flex">
            <i className="fa fa-sign-in"></i>
            <span className=""> Accounts</span>
            {accounts ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {accounts && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/account-overview"
                  >
                    <i className="fa fa-home"></i>
                    Accounts Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/add-invoices"
                  >
                    <i className="fa fa-home"></i>
                    Add Invoices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/all-invoices"
                  >
                    <i className="fa fa-home"></i>
                    All Invoices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/paid-invoices"
                  >
                    <i className="fa fa-home"></i>
                    Paid Invoices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/unpaid-invoices"
                  >
                    <i className="fa fa-home"></i>
                    Unpaid Inovices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/payment-history"
                  >
                    <i className="fa fa-home"></i>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink className="toggle-item-link" to="/account/income">
                    <i className="fa fa-home"></i>
                    Income
                  </NavLink>
                </li>
                <li>
                  <NavLink className="toggle-item-link" to="/account/expenses">
                    <i className="fa fa-home"></i>
                    Expenses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/account/make-salary"
                  >
                    <i className="fa fa-home"></i>
                    Make Salary
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setNoticeBoard(true)}>
          <div className="d-flex">
            <i className="fa fa-calendar-check-o"></i>
            <span className=""> Notice board</span>
            {noticeBoard ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>
          {noticeBoard && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/notice-board/add-notice"
                  >
                    <i className="fa fa-home"></i>
                    Add Notice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/notice-board/all-invoices"
                  >
                    <i className="fa fa-home"></i>
                    Today Notice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/notice-board/all-notice"
                  >
                    <i className="fa fa-home"></i>
                    All Notice
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setAttendance(true)}>
          <div className="d-flex">
            <i className="fa fa-files-o"></i>
            <span className=""> Attendance</span>
            {attendance ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {attendance && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/attendance/today-attendance"
                  >
                    <i className="fa fa-home"></i>
                    Today Attendance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/attendance/yesterday-attendance"
                  >
                    <i className="fa fa-home"></i>
                    Yesterday Attendance
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/attendance/total-attendance"
                  >
                    <i className="fa fa-home"></i>
                    Total Attendance
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar__link">
          <NavLink to="/notes" className="" activeClassName="">
            <i className="fa fa-money"></i>
            <span> Notes </span>
          </NavLink>
        </div>

        <div className="sidebar__link" onClick={() => setAppointment(true)}>
          <div className="d-flex">
            <i className="fa fa-briefcase"></i>
            <span className=""> Appointment</span>
            {appointment ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {appointment && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/add-leads"
                  >
                    <i className="fa fa-home"></i>
                    Add Leads
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/all-leads"
                  >
                    <i className="fa fa-home"></i>
                    All Leads
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/appointment-report"
                  >
                    <i className="fa fa-home"></i>
                    Add Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/today-appointment"
                  >
                    <i className="fa fa-home"></i>
                    Today Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/total-tasks"
                  >
                    <i className="fa fa-home"></i>
                    Next Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/appointment/appointment-report"
                  >
                    <i className="fa fa-home"></i>
                    Appointment Report
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="sidebar__link" onClick={() => setSettings(true)}>
          <div className="d-flex">
            <i className="fa fa-wrench"></i>
            <span className=""> Settings</span>
            {settings ? (
              <FaAngleUp className=" toggle-icon" />
            ) : (
              <FaAngleDown className=" toggle-icon" />
            )}
          </div>

          {settings && (
            <div ref={ref} className="toggle-item mt-1">
              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className="toggle-item-link"
                    to="/settings/font-end-section"
                  >
                    <i className="fa fa-home"></i>
                    Fontend Section
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
