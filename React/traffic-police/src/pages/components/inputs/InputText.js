import React from "react";

const InputText = ({ label, value, name, onChangeEvent, placeholder }) => {
  return (
    <div className="flex flex-col items-start">
      <label className="font-inter font-semibold text-2xl text-black-custom mb-4">
        {label}
      </label>
      <input
        value={value}
        type="text"
        name={name}
        onChange={onChangeEvent}
        className="font-normal font-inter text-2xl text-black-custom mb-10"
        placeholder={placeholder}
        autoComplete="off"
        style={{
          borderRadius: ".25rem",
          border: "none",
          boxShadow: `0 1px 1px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1)`,
        }}
      />
    </div>
  );
};

export default InputText;
