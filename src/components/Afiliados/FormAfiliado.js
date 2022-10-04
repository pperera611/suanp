import { useForm, Controller } from "react-hook-form";
import React from "react";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Item from "../UI/Item"
import Box from "@mui/material/Box";
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';


const grados = [
  { name: 'PROFESIONAL 1A', _id: 1 },
  { name: 'ADMINISTRATIVO IV', _id: 2 },
  { name: 'GERENTE GENERAL', _id: 3 },
  { name: 'JEFE DE DEPARTAMENTO', _id: 4 } ];

const localidades = [
  { name: "MONTEVIDEO", _id: 1 },
  { name: "COLONIA", _id: 2 },
  { name: "PAYSANDU", _id: 3 },
  { name: "SALTO", _id: 4 },
];





//https://www.paradigmadigital.com/dev/desarrollo-formularios-react/
    const patterns = { nombre: /^[A-Za-z]+$/i,
                       mail:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                       telefono: /^[0-9]+$/i,
                       nroSocio: /^[0-9]+$/i
                     };

    const messages = {
      required: "Este campo es obligatorio",
      nroSocio: "El número de socio introducido no es el correcto",
      nombre: "Debes introducir una cadena de texto correcta",
      mail: "Debes introducir un correo valido",
      telefono: "Debes introducir un número de telefono"
     };

export default function FormAfiliado(props) {
  
  
  
  
  const {register, control, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
  
  

    const onSubmit = (userInfo) => {
      console.log(userInfo);
    };

    const handleClose = () => {
      props.onClose();
    };

    const getOpObj = (option,options) => {
      if (!option._id) option = options.find(op => op._id === option);
      return option;
    };
  
    return (
      <Box sx={{ p: 2 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <TextField
                  id="nroSocio"
                  name="nro-socio"
                  label="Número de Socio"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("nroSocio", {
                    required: messages.required,
                    minLength: {
                      value: 6,
                      message: messages.nroSocio,
                    },
                    maxLength: {
                      value: 6,
                      message: messages.nroSocio,
                    },
                    pattern: {
                      value: patterns.nroSocio,
                      message: messages.nroSocio,
                    },
                  })}
                />
                {errors.nroSocio && <p>{errors.nroSocio.message}</p>}
              </Item>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={5}>
              <Item>
                <TextField
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("nombre", {
                    required: messages.required,
                    pattern: {
                      value: patterns.nombre,
                      message: messages.nombre,
                    },
                  })}
                />
                {errors.nombre && <p>{errors.nombre.message}</p>}
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <TextField
                  id="apellido"
                  name="apellido"
                  label="Apellido"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("apellido", {
                    required: messages.required,
                    pattern: {
                      value: patterns.nombre,
                      message: messages.nombre,
                    },
                  })}
                />
                {errors.apellido && <p>{errors.nombre.message}</p>}
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <TextField
                  id="telefono"
                  name="telefono"
                  label="Telefono"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("telefono", {
                    required: messages.required,
                    minLength: {
                      value: 8,
                      message: messages.telefono,
                    },
                    maxLength: {
                      value: 9,
                      message: messages.telefono,
                    },
                    pattern: {
                      value: patterns.telefono,
                      message: messages.telefono,
                    },
                  })}
                />
                {errors.telefono && <p>{errors.telefono.message}</p>}
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <TextField
                  id="mail"
                  name="mail"
                  label="Mail"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("mail", {
                    required: messages.required,
                    pattern: {
                      value: patterns.mail,
                      message: messages.mail,
                    },
                  })}
                />
                {errors.mail && <p>{errors.mail.message}</p>}
              </Item>
            </Grid>

            <Grid item xs={7}>
              <Item>
                <Controller
                  control={control}
                  name="grado"
                  defaultValue={grados[0]}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={grados}
                      getOptionLabel={(option) => getOpObj(option,grados).name}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined || option._id === value._id
                      }
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Grado"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  )}
                />
              </Item>
            </Grid>

            <Grid item xs={5}>
              <Item>
                <Controller
                  control={control}
                  name="localidad"
                  defaultValue={localidades[0]}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={localidades}
                      getOptionLabel={(option) => getOpObj(option,localidades).name}
                      isOptionEqualToValue={(option, value) =>
                        value === undefined || option._id === value._id
                      }
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Localidad"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  )}
                />
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item>
                <Divider />
                <DialogActions>
                  <Button onClick={handleClose}>Cancelar</Button>
                  <Button type="submit">Agregar</Button>
                </DialogActions>
              </Item>
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  }