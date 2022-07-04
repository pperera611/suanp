
import './App.css';
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './store/auth-context';



function App() {


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
        <AuthProvider>
        <Routes>
          
          <Route path="/login" element ={<Login/>}/>
          <Route path="/" element = {<Dashboard/>}/>
                    
        </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
