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
  let errors = [];
  if (err.graphQLErrors[0].message) {
    errors.push(err.graphQLErrors[0].message);
  }
  const joiErrors = err.graphQLErrors[0].extensions.exception.details;
  if (joiErrors && joiErrors.length > 0) {
    errors = joiErrors.map(err => err.message);
  }

  return errors;
};
