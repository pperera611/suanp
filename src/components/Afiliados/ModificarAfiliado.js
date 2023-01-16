import DialogWrapper from "../UI/DialogWrapper";
import React, { useEffect } from "react";
import FormAfiliado from "./FormAfiliado";
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

export default function ModificarAfiliado(props) {

    const [nroSocio, setNroSocio] = useState();
    const [enableForm, setEnableForm] = useState(false);
   
    const handleClose = () => {
      setEnableForm(false);
      
    };
    const handleEdit = () => {
      setEnableForm(true);
    };
    
    useEffect(()=>{
		setNroSocio(props.nroCobro);
	}, [props.nroCobro])
   // console.log(props.nroCobro)
    
    
return (
  <>
    <EditIcon onClick={() => handleEdit()} />
     <DialogWrapper
      open={enableForm}
      tituloModal="Modificar Afiliado"
      onCloseDialog={handleClose}
    >
      <Divider />
      {enableForm && (
        <FormAfiliado
          onClose={handleClose}
          loadData={true}
          payload={nroSocio}
        />
      )}
    </DialogWrapper>
  </>
);


}

