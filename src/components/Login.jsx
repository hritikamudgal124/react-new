import React from "react";
import {Typography } from '@mui/material';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Products from "./Products";

const contentBoxStyle = {
  width: "20vw",
  fontSize: "1.2rem",
};
const buttonStyle = {
  color: "#41295a",
  fontFamily: "'Zeyada', cursive",
  fontSize: "20px",
  fontWeight: "bold",
  border: "2px solid #41295a"
}
const boxStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const contactBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Added to center align horizontally
  textAlign: "center",
  fontFamily: "'Zeyada', cursive", fontWeight: "bolder", color: "#41295a"
}

function Login() {
  const [emaillog,setEmaillog] = useState("");
  const [passwordlog,setPasswordlog] = useState("");
  const [flag,setFlag] = useState(false);
  const [home,setHome] = useState(true);
 

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleLogin(e){
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
      setFlag(true);
      console.log("Empty");
    }else if (passwordlog != pass || emaillog!= mail){
      setFlag(true)
    }else{
      setHome(!Products);
      setFlag(false)
    }
  }
 
  return (
    <div>
      {home ? (
      <Box sx={boxStyle} onSubmit={handleLogin}>
      <Box sx={contactBoxStyle}>
      <Box>
          <Typography variant="h3" sx={contactBoxStyle}>Login</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Email"
            onChange={(event) => setEmaillog(event.target.value)}
            sx={contentBoxStyle}
          />
        </Box>
        <FormControl
          sx={{ mt: 2, width: "20vw" }}
          onChange={(event) => setPasswordlog(event.target.value)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box sx={{ mt: 2 }}>
            <Button variant="outlined" sx={buttonStyle} onClick={handleLogin} >
              Login   
            </Button>  
            {/* product */}
          </Box>
          {flag && (
          <Alert severity="error">Please enter correct details — check it out!</Alert>
        )}
      </Box>
      </Box>
      ):(
        <Products/>
      )}
    </div>
  );
}

export default Login;
