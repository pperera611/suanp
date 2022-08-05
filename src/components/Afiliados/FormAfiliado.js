import SelectLocalidad from "../UI/SelectLocalidad";
import { useForm } from "react-hook-form";
import React from "react";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Item from "../UI/Item"
import Box from "@mui/material/Box";

//https://www.paradigmadigital.com/dev/desarrollo-formularios-react/

export default function FormAfiliado(props) {
    
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (userInfo) => {
      console.log(userInfo);
    };
  
    return (
        
      <Box sx={{ p: 2,}}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <Item>
                <TextField
                  id="nro-socio"
                  name="nro-socio"
                  label="Número de Socio"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("nro-socio")}
                />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("nombre")}
                />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  id="apellido"
                  name="apellido"
                  label="Apellido"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("apellido")}
                />
              </Item>
            </Grid>
            
            <input type="submit" />
          </Grid>
        </form>
      </Box>
    );
  }