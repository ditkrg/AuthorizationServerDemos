import React from "react";

const TableData = ({ text, Component }) => (
  <td className="px-16 py-4 whitespace-nowrap text-2xl font-inter text-black-custom font-normal">
    {text ? text : <Component />}
  </td>
);

export default TableData;
