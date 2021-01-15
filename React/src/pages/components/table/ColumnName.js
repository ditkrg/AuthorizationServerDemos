import React from "react";

const ColumnName = ({ text }) => (
  <th
    scope="col"
    className="px-16 py-4 whitespace-nowrap text-2xl font-inter text-black-custom font-semibold"
  >
    {text}
  </th>
);

export default ColumnName;
