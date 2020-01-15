import React, { useState } from "react";
import axiosWithAuth from "../../auth/axiosWithAuth.js";

const Login = (props) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/login", loginData)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                setLoginData({
                    username: "",
                    password: ""
                });
                props.history.push("/dashboard");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h1>Welcome to Dad Jokes!</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    value={loginData.username}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    value={loginData.password}
                    placeholder="Password"
                    required
                />
                <button>Login</button>
            </form>
        </>
    );
};

export default Login;