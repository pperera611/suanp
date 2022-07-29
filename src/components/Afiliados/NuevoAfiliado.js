import DialogWrapper from "../UI/DialogWrapper";
import React, {useRef} from "react";
import { TextField } from "@mui/material";
import SelectLocalidad from "../UI/SelectLocalidad";

export default function NuevoAfiliado(props) {

    const nroSocioRef = useRef();
    const nombreRef = useRef();

    const handleClose = () => {
      props.onCloseDialogAddAfiliado();
    };

    const submitHandler = () => {
    
    }

return(
    <DialogWrapper open ={props.open} tituloModal = "Nuevo Afiliado" onCloseDialog ={handleClose}>
        <form onSubmit={submitHandler}>
        <TextField
                  ref = {nroSocioRef}
                  id="nro-socio"
                  label="Nro de Socio"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
         />
         <TextField
                  ref={nombreRef}
                  id="nombre"
                  label="Nombre"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
         />
         <SelectLocalidad/>

        </form>   
        

    </DialogWrapper>
)


}
