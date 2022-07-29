import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogWrapper(props) {
  

  return (
    <div>
     
      <Dialog open={props.open} onClose={props.onCloseDialog}>
        
        <DialogTitle>{props.tituloModal}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          {props.children} 
                  
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCloseDialog}>Cancel</Button>
          <Button onClick={props.onCloseDialog}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}