import React, { Component } from "react";

import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: {
      userName: "",
      name: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().email().label("UserName"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Register Form Submitted Sucessfully");
  };
  render() {
    return (
      <div className="container">
        <div className="row mx-md-n5">
          <div className="col-2"></div>
          <div className="col-8">
            <h1>Register</h1>

            <form onSubmit={this.handleSubmit}>
              {this.renderInput("userName", "UserName")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Register;
