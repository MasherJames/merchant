import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Form, Button, Header, Message, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { REGISTER_USER } from "../queries";
import useRegisterForm from "../customhook";
import { errorHook } from "../customhook";

const Register = props => {
  const [errors, setErrors] = useState([]);

  const initialState = {
    username: "",
    email: "",
    password: ""
  };

  const { handleChange, handleSubmit, inputValues } = useRegisterForm(
    registerUser,
    initialState
  );

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(cache, result) {
      props.history.push("/login");
    },
    onError(err) {
      const register_errors = errorHook(err);
      setErrors(register_errors);
    },
    variables: inputValues
  });

  function registerUser() {
    addUser();
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
            Create an Account
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
            label="Username"
            placeholder="Username..."
            name="username"
            type="text"
            value={inputValues.username}
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
            Register
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
          Already Have an Account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
