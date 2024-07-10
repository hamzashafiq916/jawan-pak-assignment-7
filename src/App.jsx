import React, { useState } from "react";
import "./App.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const App = () => {

  const [isLogin, setIsLogin] = useState(true)

  const handleLoginClick = () => {
    setIsLogin(false)
  }
  const handleSignUpClick = () => {
    setIsLogin(true)
  }

  return (
    <div className="App">
      {
        isLogin ? (
          <>
          <Typography variant="h3" color='primary'>Login Page</Typography>
          <Box
        height={300}
        width={300}
        sx={{ border: "2px solid gray" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={'center'}
        gap={2}
        padding={"20px 20px"}
        className="Box"
      >
        <TextField
          variant="standard"
          label="Email"
          placeholder="Enter Your Email"
          type="text"
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Your Email"
          type="password"
        />
        <Button variant="contained" onClick={handleLoginClick}>Login</Button>
      </Box>
      </>
        ) : (
          <>
          <Typography variant="h3" color="error">SignUp Page</Typography>
          <Box
        height={300}
        width={300}
        sx={{ border: "2px solid gray" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={'center'}
        gap={2}
        padding={"20px 20px"}
        className="Box"
      >
        <TextField
          variant="standard"
          label="Full Name"
          placeholder="Enter Your Name"
          color="error"
          type="text"
        />
        <TextField
          variant="standard"
          label="Email"
          placeholder="Enter Your Email"
          color="error"
          type="text"
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Your Email"
          color="error"
          type="password"
        />
        <Button color="error" variant="contained" onClick={handleSignUpClick}>SignUp</Button>
      </Box>
          </>
        )
      }
    </div>
  );
};

export default App;
