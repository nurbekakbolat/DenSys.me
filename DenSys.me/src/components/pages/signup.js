import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import "./signup.css";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import InputIcon from "@mui/icons-material/Input";
const Signup = () => {
  const [signed, setsigned] = useState(false);
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleClick = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({ name: "", surname: "", email: "", password: "" });
  };
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          margin="auto"
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          marginTop={10}
          borderRadius={10}
          padding={3}
          boxShadow={"5px 5px 10px #ccc"}
        >
          <Typography variant="h4" padding={3} text-align="center">
            Registration form
          </Typography>
          <TextField
            name="name"
            onChange={handleChange}
            value={input.name}
            type={"text"}
            margin="normal"
            variant="outlined"
            placeholder="Name"
          />
          <TextField
            value={input.surname}
            onChange={handleChange}
            name="surname"
            type={"text"}
            margin="normal"
            variant="outlined"
            placeholder="Surname"
          />
          <TextField
            value={input.email}
            onChange={handleChange}
            name="email"
            type={"text"}
            margin="normal"
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            value={input.password}
            onChange={handleChange}
            name="password"
            type={"password"}
            margin="normal"
            variant="outlined"
            placeholder="Password"
          />
          <div className="btn-signUp">
            <Button
              endIcon={<InputIcon />}
              onClick={handleClick}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
