import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogWrapper(props) {
  
  const handleClose = () => {
    props.onCloseDialog();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>{props.tituloModal}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}