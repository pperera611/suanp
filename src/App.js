
import './App.css';
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from './hooks/use-auth';


function App(props) {

  const authCtx = useAuth();
  console.log(authCtx);
  
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
           <Routes>
             <Route path="/login" element= {!authCtx.isLoggedIn ? <Login/>: <Navigate to="/" replace />} />
             <Route path="/afiliados" element={authCtx.isLoggedIn ? <Dashboard opc={1}/> : <Navigate to="/login"/>} />
             <Route path="/" element={authCtx.isLoggedIn ? <Dashboard opc={2}/> : <Navigate to="/login"/>} />
             
             <Route path="*" element={<Navigate to="/" replace />}/>
           </Routes>
         </ThemeProvider>
       
     </>
   );
}

export default App;
