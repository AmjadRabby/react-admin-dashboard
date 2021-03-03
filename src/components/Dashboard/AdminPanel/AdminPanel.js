import React from "react";
import { Row } from "react-bootstrap";
import {
  ActiveEmployData,
  AdminData,
  TaskTimelineData,
} from "../AdminData/Data";
import AdminItem from "./AdminItem";
import "./AdminPanel.css";
import { FaCircle } from "react-icons/fa";

const AdminPanel = () => {
  return (
    <div className="overflow-auto pb-5 bg-light">
      <div className="container d-flex justify-content-between mt-5 ">
        <div className="mb-3">
          <h5>Hi,Good Morning</h5>
          <h2 className="">Welcome Back, Admin</h2>
          <h5>Have a nice day</h5>
        </div>
        <div className="text-center mt-4 align-items-center">
          <h4>1:16 PM</h4>
          <h4>Saturday, February 7,2021</h4>
        </div>
      </div>
      <div className="bg-white">
        <p className="tody-remainder font-weight-bold pr-2">
          <span className="pr-3 mr-2">Tody Remainder:</span>
          <marquee direction="left" width="80%" scrollamount="3">
            {" "}
            * Meeting with Meraki BD at 12:12 p.m. // * Naim's project has to be
            explained. // * Meeting with Meraki BD at
          </marquee>
        </p>
      </div>
      <div className="container mb-5">
        <Row className="mt-5 mb-5">
          {AdminData.map((item) => (
            <AdminItem key={item.id} data={item} />
          ))}
        </Row>

        <Row>
          <div className="col-6">
            <div className="bg-white item-radius p-4">
              <div className="d-flex align-items-center mb-2">
                <FaCircle className="circle-icon  mr-2" />{" "}
                <h4>Active Employee</h4>
                <h5 className="history ml-auto">History</h5>
              </div>
              <table className="w-100">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Working Hour</th>
                    <th>Doing Task</th>
                  </tr>
                </thead>

                <tbody>
                  {ActiveEmployData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="">{item.name}</td>
                        <td>{item.status}</td>
                        <td className="">{item.workingHours}</td>
                        <td className="">{item.task}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="d-flex align-content-end">Previous 1 Next</p>
            </div>
          </div>
          <div className="col-6">
            <div className="bg-white item-radius p-4">
              <div className="d-flex align-items-center  mb-2">
                <FaCircle className="circle-icon mr-2" />
                <h4>Tasks Timeline</h4>
                <h5 className="history ml-auto">History</h5>
              </div>
              <table className="w-100">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Projects</th>
                    <th>Status</th>
                    <th>Ending Date</th>
                  </tr>
                </thead>
                <tbody>
                  {TaskTimelineData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td className="">{item.task}</td>
                        <td>{item.project}</td>
                        <td className="">{item.status}</td>
                        <td className="">{item.endingDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default AdminPanel;
