import React, { createContext, useReducer } from "react";
import AuthReducer from "./reducers";

export const AppContext = createContext();

export const AppState = props => {
  const initialState = {
    user: null
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = user => dispatch({ type: "LOGIN", user });

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AppContext.Provider value={{ login, logout }}>
      {props.children}
    </AppContext.Provider>
  );
};
