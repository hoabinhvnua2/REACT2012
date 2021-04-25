import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputUser = (e) => {
    this.setState({
        email: e.target.value
    })
  }
  handleInputPass = (e) => {
    this.setState({
        password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} =  this.state;
    if(email.length === 0 || password.length === 0) return false;

    console.log(email, password)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ueer name"
              name="user"
              onInput={this.handleInputUser}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onInput={this.handleInputPass}/>
          </Form.Group>
          <Button variant="primary" type="submit">Primary</Button>
        </Form>
      </div>
    );
  }
}

export default SignIn;
