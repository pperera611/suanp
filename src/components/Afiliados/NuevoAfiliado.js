import DialogWrapper from "../UI/DialogWrapper";
import React from "react";
import FormAfiliado from "./FormAfiliado";
import Divider from '@mui/material/Divider';

export default function NuevoAfiliado(props) {

    const handleClose = () => {
      props.onCloseDialogAddAfiliado();
    };

  
return(
    <DialogWrapper open ={props.open} tituloModal = "Nuevo Afiliado" onCloseDialog ={handleClose}>
         <Divider/>
        <FormAfiliado onClose={handleClose}/>
    </DialogWrapper>
)


}
