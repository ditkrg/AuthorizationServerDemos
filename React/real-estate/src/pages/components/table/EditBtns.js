import React from "react";
import { FiSettings, FiTrash } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const EditBtns = () => {
  return (
    <div className="flex">
      <FiTrash className="mx-3 cursor-pointer" />
      <FiSettings className="mx-3 cursor-pointer" />
      <BsThreeDots className="mx-3 text-3xl cursor-pointer" />
    </div>
  );
};

export default EditBtns;
