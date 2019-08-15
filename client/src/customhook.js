import { useState } from "react";

export default (actionCallBack, initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    actionCallBack();
  };

  return {
    handleChange,
    handleSubmit,
    inputValues
  };
};

export const errorHook = err => {
  let register_errors = [];
  if (err.graphQLErrors[0].message) {
    register_errors.push(err.graphQLErrors[0].message);
  }
  const joiErrors = err.graphQLErrors[0].extensions.exception.details;
  if (joiErrors && joiErrors.length > 0) {
    register_errors = joiErrors.map(err => err.message);
  }

  return register_errors;
};
