import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button, Header, Message, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { LOGIN_USER } from "../queries";
import useLoginForm from "../customhook";
import { errorHook } from "../customhook";
import { AppContext } from "../context";

const Login = props => {
  const [errors, setErrors] = useState([]);
  const context = useContext(AppContext);

  const initialState = {
    email: "",
    password: ""
  };

  const { handleChange, handleSubmit, inputValues } = useLoginForm(
    loginUser,
    initialState
  );

  const [login, { loading }] = useMutation(LOGIN_USER, {
    update(
      cache,
      {
        data: { login: user }
      }
    ) {
      context.login(user);
      props.history.push("/");
    },
    onError(err) {
      const login = errorHook(err);
      setErrors(login);
    },
    variables: inputValues
  });

  function loginUser() {
    login();
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Form
          onSubmit={handleSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <Header as="h2" textAlign="center">
            Login in
          </Header>
          <Form.Input
            label="Email"
            placeholder="Email..."
            name="email"
            type="text"
            value={inputValues.email}
            onChange={handleChange}
          />

          <Form.Input
            label="Password"
            placeholder="Password..."
            name="password"
            type="password"
            value={inputValues.password}
            onChange={handleChange}
          />

          <Button type="submit" color="pink">
            Login
          </Button>
        </Form>
        {errors && errors.length > 0 && (
          <div className="ui errors message">
            <ul className="list">
              {errors.map((error, indx) => (
                <li key={indx}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <Message>
          Not registered yet? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
