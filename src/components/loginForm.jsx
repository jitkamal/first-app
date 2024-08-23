import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      userName: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    userName: Joi.string().required().label("UserName"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Form submitted!");
  };

  render() {
    return (
      <div className="container">
        <div className="row mx-md-n5">
          <div className="col-2"></div>
          <div className="col-8">
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>
              {this.renderInput("userName", "UserName")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
