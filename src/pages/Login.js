import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import useInput from "../hooks/use-input";
import CopyRight from '../components/UI/CopyRight';


export default function Login(props) {
  
    const isEmail = value => value.includes("@");
    const isPassword = value => value.length > 6;
   
    const {
      value: email,
      isValid: isValidEmail,
      hasError: hasErrorE,
      valueChangeHandler: handleChangeEmail,
      inputBlurHandler: handleBlurEmail,
      //reset: resetFirstName,
    } = useInput(isEmail);
    
    const {
      value: password,
      isValid: isValidPass,
      hasError: hasErrorP,
      valueChangeHandler: handleChangePass,
      inputBlurHandler: handleBlurPass,
      //reset: resetFirstName,
    } = useInput(isPassword);
    

    const handleSubmit = (event) => {
    event.preventDefault();
    
        if (isValidEmail && isValidPass) {
            const data = new FormData(event.currentTarget);
            console.log({
            email: data.get('email'),
            password: data.get('password'),
            });
            props.onLogged(email);

        }

    };

  return (
   
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Ingrese sus credenciales
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id= "email"
                label="Email"
                name="email"
                autoComplete="email"
                value = {email}
                onBlur={handleBlurEmail}
                onChange={handleChangeEmail}
                helperText = {hasErrorE&&"Formato de email incorrecto"}
                autoFocus
                error = {hasErrorE}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onBlur={handleBlurPass}
                onChange={handleChangePass}
                helperText = {hasErrorP&&"Contraseña debe tener mas de 6 caracteres"}
                error = {hasErrorP}
                             
              />
              
              <Button
                disabled ={!isValidEmail || !isValidPass}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              
              <CopyRight sx={{ mt: 4 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
   
  );
}

