import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'; 
import useAuth from "../../hooks/use-auth";

const AppBar = (props) => {

  const {onLogout} = useAuth();

  return (
    <Toolbar
      sx={{
        pr: "24px", // keep right padding when drawer closed
      }}    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={props.onClick}
        sx={{
          marginRight: "36px",
          ...(props.open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        SUANP
      </Typography>
      
      <Button color="inherit" onClick={onLogout}>Logout</Button>

    </Toolbar>
  );
};

export default AppBar;