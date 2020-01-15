import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [data, SetData] = useState({ username: "", password: "" });
  const [err, SetErr] = useState("");

  const handleChange = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("https://the-joker-spa.herokuapp.com/api/auth/register", data)
      .then((res) => {
        SetErr("");
        SetData({ username: "", password: "" });
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Welcome to Dad Jokes!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          value={data.username}
          placeholder="Username"
          type="text"
          required
        />
        <input
          onChange={handleChange}
          name="password"
          value={data.password}
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <br />
      <button
        type="button"
        onClick={() => {
          props.history.push("/login");
        }}
      >
        Already Have An Account? Log In!
      </button>
      <h3 style={{ color: "red" }}>{err && err}</h3>
    </div>
  );
};


export default Register;