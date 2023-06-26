import {Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Login from './Login';


const buttonStyle = {
  color: "#41295a",
  fontFamily: "'Zeyada', cursive",
  fontSize: "20px",
  fontWeight: "bold",
  border: "2px solid #41295a"
}

const contactBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Added to center align horizontally
  textAlign: "center",
  fontFamily: "'Zeyada', cursive", fontWeight: "bolder", color: "#41295a"
}
const boxStyle={
  height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
}
const contentBoxStyle={
  width: '20vw', fontSize: '1.2rem'
}

function Registration() {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [phone,setPhone]= useState("");
  const [password,setPassword]= useState("");
  const [flag, setFlag] = useState(false);
  const [login,setLogin]= useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
      console.log("saved in local storage");
      setLogin(!login);
    }
}
  function handleClick() {
    setLogin(!login);
  }
const navigate = useNavigate();
const handleNavigateToLogin=()=>{
  navigate("/Login")
}

  return (
    <Box sx={boxStyle} onSubmit={handleSubmit}>
    {login ? (
      <Box sx={contactBoxStyle}>
        <Box>
          <Typography variant="h3" sx={contactBoxStyle}>Registration</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField label="Name" onChange={(event)=> setName(event.target.value)} sx={contentBoxStyle} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField label="Email" onChange={(event)=> setEmail(event.target.value)} sx={contentBoxStyle} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <TextField label="Mobile Number" onChange={(event)=> setPhone(event.target.value)} sx={contentBoxStyle} />
        </Box>
        <FormControl onChange={(event)=> setPassword(event.target.value)} sx={{ mt: 2, width: '20vw' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
            <Button variant="outlined" sx={buttonStyle} onClick={handleSubmit}>
              Register
            </Button>
          </Box>
        <Box sx={{ mt: 2, cursor:"pointer" }} onClick={handleClick}>Already registered {" "} login in?</Box>
        {flag && (
          <Alert severity="error">Please enter all the details — check it out!</Alert>
        )}
      </Box>
):(
  <Login/>)}
    </Box>
  );
}

export default Registration;
