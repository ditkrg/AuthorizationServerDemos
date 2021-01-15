import React from "react";
import { FiSettings, FiTrash } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const EditBtns = () => {
  return (
    <div className="flex">
      <FiTrash className="mx-3" />
      <FiSettings className="mx-3" />
      <BsThreeDots className="mx-3 text-3xl" />
    </div>
  );
};

export default EditBtns;
