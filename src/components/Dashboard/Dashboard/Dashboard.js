import { useState } from "react";
import "./Dashboard.css";
// import Main from "../main/Main";
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
import AddEmployees from "../Employees/AddEmployees";
import EmployeesHistory from "../Employees/EmployeesHistory";
import SalaryHistory from "../Employees/SalaryHistory";
import TotalEmployees from "../Employees/TotalEmployees";
import AddTask from "../Task/AddTask";
import CompletedTasks from "../Task/CompletedTasks";
import DoingTasks from "../Task/DoingTasks";
import TimeOutTasks from "../Task/TimeOutTasks";
import TotalTasks from "../Task/TotalTasks";
import CompletedSupport from "../Supports/CompletedSupport";
import SupportPending from "../Supports/SupportPending";
import SupportRequest from "../Supports/SupportRequest";
import AccountsOverview from "../Accounts/AccountsOverview";
import AddInvoices from "../Accounts/AddInvoices";
import AllInvoices from "../Accounts/AllInvoices";
import Expenses from "../Accounts/Expenses";
import Income from "../Accounts/Income";
import MakeSalary from "../Accounts/MakeSalary";
import PaidInvoices from "../Accounts/PaidInvoices";
import PaymentHistory from "../Accounts/PaymentHistory";
import UnpaidInvoices from "../Accounts/UnpaidInvoices";
import AddNotice from "../NoticeBoard/AddNotice";
import AllNotice from "../NoticeBoard/AllNotice";
import TodayNotice from "../NoticeBoard/TodayNotice";
import TodayAttendance from "../Attendance/TodayAttendance";
import YesterdayAttendance from "../Attendance/YesterdayAttendance";
import TotalAttendance from "../Attendance/TotalAttendance";
import AddLeads from "../Appointment/AddLeads";
import AddAppointment from "../Appointment/AddAppointment";
import AllLeads from "../Appointment/AllLeads";
import AppointmentReport from "../Appointment/AppointmentReport";
import NextAppointment from "../Appointment/NextAppointment";
import TodayAppointment from "../Appointment/TodayAppointment";
import FontendSection from "../Settings/FontendSection";
import AdminPanel from "../AdminPanel/AdminPanel";

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
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

        <Switch>
          <Route exact path="/dashboard">
            {" "}
            <AdminPanel />{" "}
          </Route>
          <Route exact path="/">
            {" "}
            <AdminPanel />{" "}
          </Route>
          <Route path="/notes">
            <Notes />
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

          {/* Employees Route        */}
          <Route path="/employees/add-employees">
            <AddEmployees />
          </Route>
          <Route path="/employees/employees-history">
            <EmployeesHistory />
          </Route>
          <Route path="/employees/salary-history">
            <SalaryHistory />
          </Route>
          <Route path="/employees/total-employees">
            <TotalEmployees />
          </Route>

          {/* Task Route        */}
          <Route exact path="/task/add-task">
            <AddTask />
          </Route>
          <Route path="/task/completed-tasks">
            <CompletedTasks />
          </Route>
          <Route path="/task/doing-tasks">
            <DoingTasks />
          </Route>
          <Route path="/task/time-out-tasks">
            <TimeOutTasks />
          </Route>
          <Route path="/task/total-tasks">
            <TotalTasks />
          </Route>

          {/* Clients Route        */}
          <Route path="/support/completed-support">
            <CompletedSupport />
          </Route>
          <Route path="/support/support-pending">
            <SupportPending />
          </Route>
          <Route path="/support/support-request">
            <SupportRequest />
          </Route>

          {/* Accounts Route        */}
          <Route exact path="/account/account-overview">
            <AccountsOverview />
          </Route>
          <Route path="/account/add-invoices">
            <AddInvoices />
          </Route>
          <Route path="/account/all-invoices">
            <AllInvoices />
          </Route>
          <Route path="/account/expenses">
            <Expenses />
          </Route>
          <Route path="/account/income">
            <Income />
          </Route>
          <Route path="/account/make-salary">
            <MakeSalary />
          </Route>
          <Route path="/account/paid-invoices">
            <PaidInvoices />
          </Route>
          <Route path="/account/payment-history">
            <PaymentHistory />
          </Route>
          <Route path="/account/unpaid-invoices">
            <UnpaidInvoices />
          </Route>

          {/* NoticeBoard Route        */}
          <Route exact path="/notice-board/add-notice">
            <AddNotice />
          </Route>
          <Route path="/notice-board/all-notice">
            <AllNotice />
          </Route>
          <Route path="/notice-board/all-invoices">
            <TodayNotice />
          </Route>

          {/* Attendance Route        */}
          <Route path="/attendance/today-attendance">
            <TodayAttendance />
          </Route>
          <Route path="/attendance/yesterday-attendance">
            <YesterdayAttendance />
          </Route>
          <Route path="/attendance/total-attendance">
            <TotalAttendance />
          </Route>

          {/* Appointment Route        */}
          <Route exact path="/appointment/add-leads">
            <AddLeads />
          </Route>
          <Route path="/appointment/add-appointment">
            <AddAppointment />
          </Route>
          <Route path="/appointment/all-leads">
            <AllLeads />
          </Route>
          <Route path="/appointment/appointment-report">
            <AppointmentReport />
          </Route>
          <Route path="/appointment/total-tasks">
            <NextAppointment />
          </Route>
          <Route path="/appointment/today-appointment">
            <TodayAppointment />
          </Route>

          {/* Settings Route        */}
          <Route exact path="/settings/font-end-section">
            <FontendSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
