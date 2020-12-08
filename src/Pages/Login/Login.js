import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { loginPOST } from "../../Utils/ApiRequest";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  componentDidMount = () => {
    document.getElementById("navigation-bar").style.display = "none";
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkBoxHandler = () => {
    this.setState({
      remember: document.getElementById("remember_me").checked,
    });
  };

  submmitHandler = () => {
    loginPOST(this.state)
      .then((res) => res.json())
      .then((data) => {
        this.deleteState();
        if (data.success === 200) {
          document.getElementById("navigation-bar").style.display = "block";
          this.props.history.push("/");
        } else {
          this.resetForm();
        }
      })
      .catch((err) => {
        this.resetForm();
        this.deleteState();
        alert(err);
      });
  };

  deleteState = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  resetForm = () => {
    document.getElementById("loginForm").reset();
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Form id="loginForm">
          <Form.Group controlId="formBasicEmail" className="rightTextAlign">
            <Form.Label>שם משתמש</Form.Label>
            <Form.Control
              className="rightTextAlign username"
              name="username"
              type="text"
              placeholder="הכנס שם משתמש"
              onChange={this.changeHandler}
            />
          </Form.Group>

          <Form.Group className="rightTextAlign" controlId="formBasicPassword">
            <Form.Label> סיסמא</Form.Label>
            <Form.Control
              className="rightTextAlign"
              name="password"
              type="password"
              placeholder="הכנס סיסמא"
              onChange={this.changeHandler}
            />
          </Form.Group>
          <div className="custom-control custom-checkbox mb-3 rightTextAlign">
            <input
              type="checkbox"
              className="custom-control-input"
              id="remember_me"
              name="remember"
              onChange={this.checkBoxHandler}
            />
            <label className="custom-control-label" htmlFor="remember_me">
              תזכור אותי
            </label>
          </div>
          <Button variant="primary" onClick={this.submmitHandler}>
            היכנס
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
