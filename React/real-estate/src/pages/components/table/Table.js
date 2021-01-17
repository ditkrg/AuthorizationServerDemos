import React from "react";
import ColumnName from "./ColumnName";
import EditBtns from "./EditBtns";
import TableData from "./TableData";

const Table = ({ vehicleData }) => {
  return (
    <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded w-full">
      <table className="min-w-full divide-y divide-gray-200 mb-0">
        <thead className="bg-blue-custom">
          <tr>
            <ColumnName text={"Address"} />
            <ColumnName text={"Area"} />
            <ColumnName text={"Citizen UPN"} />
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicleData.map((vehicle) => (
            <tr key={vehicle.id} className="bg-gray-50">
              <TableData text={vehicle.address} />
              <TableData text={vehicle.area} />
              <TableData text={vehicle.citizen_upn} />
              <TableData Component={EditBtns} />
            </tr>
          ))}

          {/* <!-- More items... --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
