import React, { useState } from "react";
import "./style.css";

export const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    if (user.email.includes("@") && user.username === "") {
      setUser({ ...user, username: user.email.split("@")[0] });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={user.email}
          placeholder="Email Address"
        />
        <input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={user.username}
          placeholder="User Name"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="passwordConfirm"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
