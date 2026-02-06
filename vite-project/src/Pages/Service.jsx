import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AuthContext from "../Context/AuthContext";

const Service = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(AuthContext);
  return (
    <div>
      <h1>{theme}</h1>
      <p>id : {user.id}</p>
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
    </div>
  );
};

export default Service;
