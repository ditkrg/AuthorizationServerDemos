import React from "react";

const InputSelect = ({
  label,
  value,
  name,
  placeholder,
  onChangeEvent,
  options,
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="font-inter font-semibold text-2xl text-black-custom mb-4">
        {label}
      </label>
      <select
        value={value}
        name={name}
        onChange={onChangeEvent}
        className="font-normal font-inter text-2xl text-black-custom mb-10 cursor-pointer"
        style={{
          borderRadius: ".25rem",
          border: "none",
          boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1)`,
          background: "none",
          appearance: "auto",
        }}
      >
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
