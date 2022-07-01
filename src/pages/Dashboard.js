import { useState } from 'react';
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

export default function Dashboard() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        
        <AppBarWrapper position="absolute" open={open}>
          <AppBar onClick={toggleDrawer} />
        </AppBarWrapper>
        <DrawerWrapper variant="permanent" open={open}>
          <Sidebar onClick={toggleDrawer}/>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>


            
          </Container>
          <CopyRight sx={{ pt: 8 }} />
        </Box>
      </Box>
    );
}