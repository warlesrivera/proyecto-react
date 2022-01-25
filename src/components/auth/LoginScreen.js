import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {BuildTextFiled} from "../form/BuildTextFiled";

export const LoginScreenCopy = () => {
  const dispatch = useDispatch();

  // hook de  fomulario
  const [formValues, handleInputChange] = useForm({
    email: "warlesrivera123@gmail.com",
    password: "123456",
  });    

  //destructuracion de el hook form
  const { email, password } = formValues;

  // accion submit
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password)); // llamar la accion de  login con google
  };

  // accion submit de google

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <div className="auth__social-networks">
          <p>Login with social networks</p>
        </div>
      </form>
    </>
  );
};

const theme = createTheme();

export function LoginScreen() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  // hook de  fomulario
  const [formValues, handleInputChange] = useForm({
    email: "warlesrivera123@gmail.com",
    password: "123456",
  });

  //destructuracion de el hook form
  const { email, password } = formValues;

  // accion submit
  const handleLogin = (e) => {
    
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password)); // llamar la accion de  login con google
  };

  // accion submit de google

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <BuildTextFiled 
            name={"email"}
             value={formValues.email}
              label={ "Email Address"}
              InputChange={handleInputChange}
            />
            <BuildTextFiled 
            name={"password"}
             value={formValues.password}
              label={ "Password"}
              InputChange={handleInputChange}
              type={"password"}
              autoComplete={"current-password"}
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={ loading }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              <Link to="" onClick={handleGoogleLogin} variant="body2">
              <img  className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                />
                 {" Sign in with google"}
                </Link>
    
              </Grid>
              <Grid item>
                <Link to="/auth/register" variant="body2">
                  {"Create new account "}
                </Link>
        
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}