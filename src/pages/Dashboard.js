import {useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';
import Sidebar from "../components/UI/Sidebar"
import CopyRight from '../components/UI/CopyRight';
import DrawerWrapper from '../components/UI/DrawerWrapper';
import AppBarWrapper from "../components/UI/AppBarWrapper";
import AppBar from '../components/UI/AppBar';
import Afiliados from './Afiliados';
import {useNavigate } from 'react-router-dom';

export default function Dashboard(props) {
    
   
    const [open, setOpen] = useState(true);
    const [opcion, setOpcion] = useState(props.opc);
    const navigate = useNavigate();
    
    //console.log(opcion);

    const toggleDrawer = () => {
      setOpen(!open);
    };
  

    const handleSelectNav = (opc) =>{
        setOpcion(opc);
        if (opc===1)
          navigate("/afiliados");
        else
          navigate("/");
    }


    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        
        <AppBarWrapper position="absolute" open={open}>
          <AppBar onToogle={toggleDrawer} />
        </AppBarWrapper>
        <DrawerWrapper variant="permanent" open={open}>
          <Sidebar onToogle={toggleDrawer} onSelectOption={handleSelectNav}/>
        </DrawerWrapper>
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >          
          
          <Container maxWidth sx={{ mt: 8, mb: 4 , ml: -1}}>
          {opcion===1 && <Afiliados/>}  
           

          </Container>
          
          <CopyRight sx={{ pt: 8 }} />
        </Box>
      </Box>
    );
}