import React from "react";
import { FaRegFileCode } from "react-icons/fa";

const AdminItem = ({ data }) => {
  const { tittle, icon, number } = data;
  return (
    <div className="col-3  mb-5">
      <div className="bg-white h-100 item-radius p-1 px-4 shadow-sm d-flex justify-content-center align-items-center">
        <FaRegFileCode className="file-code mr-3" />
        <div className="text-center font-weight-bold">
          <h4 className="font-weight-bold">{number}</h4>
          <h5>{tittle}</h5>
        </div>
      </div>
    </div>
  );
};

export default AdminItem;
