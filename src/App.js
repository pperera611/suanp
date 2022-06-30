import { useState } from 'react';
import './App.css';
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  
  const [isLogged, setIsLogged] = useState(false);
   
  const registerLogin = (email) =>{
    if (email != null)
       setIsLogged(true)
  }
  
  const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#e53935',
        },
        secondary: {
          main: '#ef5350',
        },
      },
    }
  );

  return (
    <>
     <ThemeProvider theme={theme}>
      {!isLogged && <Login onLogged={registerLogin}/>}
      {isLogged && <p>Entraste</p>} 
    </ThemeProvider>
    </>
    );
}

export default App;
