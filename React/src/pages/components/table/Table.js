import React from "react";
import ColumnName from "./ColumnName";
import EditBtns from "./EditBtns";
import TableData from "./TableData";

const Table = ({ vehicleData }) => {
  function getType(type) {
    switch (type) {
      case 1:
        return "Sedan";
      case 2:
        return "SUV";
      case 3:
        return "Pickup";
    }
  }

  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
      <table className="min-w-full divide-y divide-gray-200 mb-0">
        <thead className="bg-gray-50">
          <tr>
            <ColumnName text={"Model"} />
            <ColumnName text={"License Plate"} />
            <ColumnName text={"Color"} />
            <ColumnName text={"Type"} />
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicleData.map((vehicle) => (
            <tr key={vehicle.id}>
              <TableData text={vehicle.model} />
              <TableData text={vehicle.licensePlate} />
              <TableData text={vehicle.color} />
              <TableData text={getType(vehicle.type)} />
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
