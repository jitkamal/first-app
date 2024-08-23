import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  debugger;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        {...rest}
        className="form-select"
        aria-label="Default select example"
      >
        <option value=""></option>
        {options.map((option) => (
          <option value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
