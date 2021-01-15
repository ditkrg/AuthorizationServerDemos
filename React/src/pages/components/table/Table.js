import React from "react";
import ColumnName from "./ColumnName";
import EditBtns from "./EditBtns";
import TableData from "./TableData";

const Table = () => {
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <ColumnName text={"Name"} />
            <ColumnName text={"Title"} />
            <ColumnName text={"Status"} />
            <ColumnName text={"Role"} />
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <TableData text={"Jane Cooper"} />
            <TableData text={"Regional Paradigm Technician"} />
            <TableData text={"Active"} />
            <TableData text={"Admin"} />
            <TableData Component={EditBtns} />
          </tr>

          {/* <!-- More items... --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
