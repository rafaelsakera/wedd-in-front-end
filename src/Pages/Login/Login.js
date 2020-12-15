import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ApiLogin } from "../../API/Login";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.getElementById("navigation-bar").style.display = "none";
  }, []);

  const changeHandler = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const checkBoxHandler = () => {
    setRemember(document.getElementById("remember_me").checked);
  };

  const submmitHandler = (e) => {
    e.preventDefault();
    ApiLogin({ username: userName, password: password, remember: remember })
      .then((data) => {
        deleteState();
        if (data.success === 200) {
          document.getElementById("navigation-bar").style.display = "block";
          history.push("/");
        } else {
          resetForm();
        }
      })
      .catch((err) => {
        resetForm();
        deleteState();
        alert(err);
      });
  };

  const deleteState = () => {
    setUserName("");
    setPassword("");
  };

  const resetForm = () => {
    document.getElementById("loginForm").reset();
  };

  return (
    <div className="d-flex justify-content-center">
      <Form id="loginForm" onSubmit={submmitHandler}>
        <Form.Group controlId="formBasicEmail" className="rightTextAlign">
          <Form.Label>שם משתמש</Form.Label>
          <Form.Control
            className="rightTextAlign username"
            name="username"
            type="text"
            placeholder="הכנס שם משתמש"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="rightTextAlign" controlId="formBasicPassword">
          <Form.Label> סיסמא</Form.Label>
          <Form.Control
            className="rightTextAlign"
            name="password"
            type="password"
            placeholder="הכנס סיסמא"
            onChange={changeHandler}
          />
        </Form.Group>
        <div className="custom-control custom-checkbox mb-3 rightTextAlign">
          <input
            type="checkbox"
            className="custom-control-input"
            id="remember_me"
            name="remember"
            onChange={checkBoxHandler}
          />
          <label className="custom-control-label" htmlFor="remember_me">
            תזכור אותי
          </label>
        </div>
        <Button type="submit" variant="primary" onClick={submmitHandler}>
          היכנס
        </Button>
      </Form>
    </div>
  );
}

export default Login;
