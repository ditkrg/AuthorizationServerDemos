import React from "react";

const ColumnName = ({ text }) => (
  <th
    scope="col"
    className="whitespace-nowrap text-2xl font-inter text-white font-semibold text-center"
    style={{ padding: "10px 40px 10px 40px" }}
  >
    {text}
  </th>
);

export default ColumnName;
