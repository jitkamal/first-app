import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import SearchBox from "./searchBox";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = (input) => {
    debugger;
    const { name, value } = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    debugger;
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);
    if (!result.error) return null;
    console.log(result.error);
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  handleSubmit = (e) => {
    debugger;
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    debugger;
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    debugger;
    const errors = { ...this.state.errors };
    const errorMeassage = this.validateProperty(input);
    if (errorMeassage) errors[input.name] = errorMeassage;
    else delete errors[input.name];

    const data = { ...this.state.data };

    data[input.name] = input.value;

    return this.setState({ data, errors });
  };

  renderButton = (label) => {
    return (
      <button
        type="submit"
        disabled={this.validate()}
        className="btn btn-primary mt-3 mx-2"
      >
        {label}
      </button>
    );
  };

  renderSelect = (name, label, options) => {
    debugger;
    const { data, errors } = this.state;
    return (
      <Select
        className="form-select"
        aria-label="Default select example"
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      ></Select>
    );
  };

  renderInput = (name, label, type) => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      ></Input>
    );
  };

  renderSearchBox = () => {
    return <SearchBox></SearchBox>;
  };
}

export default Form;
