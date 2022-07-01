import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar = (props) => {
   return (
     <>
       <Toolbar
         sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "flex-end",
           px: [1],
         }}
       >
         <IconButton onClick={props.onClick}>
           <ChevronLeftIcon />
         </IconButton>
       </Toolbar>

       <Divider></Divider>
       <List component="nav">
         <ListItemButton>
           <ListItemIcon>
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Dashboard" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <ShoppingCartIcon />
           </ListItemIcon>
           <ListItemText primary="Orders" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <PeopleIcon />
           </ListItemIcon>
           <ListItemText primary="Customers" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <BarChartIcon />
           </ListItemIcon>
           <ListItemText primary="Reports" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <LayersIcon />
           </ListItemIcon>
           <ListItemText primary="Integrations" />
         </ListItemButton>
         <Divider sx={{ my: 1 }} />
       </List>
     </>
   );
};
export default Sidebar;