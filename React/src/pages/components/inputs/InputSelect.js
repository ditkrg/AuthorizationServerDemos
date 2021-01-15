import React from "react";

const InputSelect = ({ label, value, name, onChangeEvent, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} name={name} onChange={onChangeEvent}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
