import React from "react";

const TableData = ({ text, Component }) => (
  <td
    className="whitespace-nowrap text-2xl font-inter text-black-custom font-normal text-center"
    style={{ padding: "10px 40px 10px 40px" }}
  >
    {text ? text : <Component />}
  </td>
);

export default TableData;
