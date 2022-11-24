import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./signin.css";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import axios from "axios";

import authContext from "../../Contexts";

const Signin = () => {
    const { setAuthenticated } = useContext(authContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = async (e) => {
        console.log("clicked");
        e.preventDefault();
        try {
            await axios
                .post(
                    "http://localhost:5000/login",
                    {
                        username,
                        password,
                    },
                    { withCredentials: true }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setAuthenticated(true);
                    }
                });
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={login}>
                <Box
                    margin="auto"
                    maxWidth={400}
                    display="flex"
                    flexDirection={"column"}
                    marginTop={10}
                    borderRadius={10}
                    padding={3}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{}}
                >
                    <Typography variant="h4" padding={3} text-align="center">
                        Sign in form
                    </Typography>

                    <TextField
                        margin="normal"
                        type="text"
                        placeholder="Username"
                        className="input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        type="password"
                        placeholder="Password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="btn-sign">
                        <Button type="submit" endIcon={<LoginIcon />}>
                            Login
                        </Button>
                    </div>
                </Box>
            </form>
        </div>
    );
};

export default Signin;
