import React from "react";

const InputText = ({ label, value, name, onChangeEvent }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} type="text" name={name} onChange={onChangeEvent} />
    </div>
  );
};

export default InputText;
