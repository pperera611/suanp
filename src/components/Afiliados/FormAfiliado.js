import { useForm, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Item from "../UI/Item"
import Box from "@mui/material/Box";
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import useAxios from "../../hooks/use-axios";
import { useAxios, useLazyAxios } from "use-axios-client"; //https://use-axios-client.io/
import  * as auxiliares from "../../auxiliares/Auxiliares"

/* import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
 */

//https://www.paradigmadigital.com/dev/desarrollo-formularios-react/
const baseURL = 'https://suanp-f6399-default-rtdb.firebaseio.com/';

const patterns = { 
  nombre: /^[A-Za-z]+$/i,
  mail:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  telefono: /^[0-9]+$/i,
  nroSocio: /^[0-9]+$/i
};

const messages = {
  required: "Este campo es obligatorio",
  nroSocio: "El número de socio introducido no es el correcto",
  nombre: "Debes introducir una cadena de texto correcta",
  mail: "Debes introducir un correo valido",
  telefono: "Debes introducir un número de telefono",
  direccion: "Debe introducir una direccion de domicilio"
};



export default function FormAfiliado(props) {
  //https://use-axios-client.io/
 const { grados}  = useAxios({  // { data , errorG, loadingG } = useAxios({...
    method: 'get',
    url: baseURL+'grados.json',
    headers: JSON.stringify({ accept: '*/*' })
  });
  const { localidades }  = useAxios({
    method: 'get',
    url: baseURL+'localidades.json',
    headers: JSON.stringify({ accept: '*/*' })
  });

  const { unidades }  = useAxios({
    method: 'get',
    url: baseURL+'unidades.json',
    headers: JSON.stringify({ accept: '*/*' })
  });


  const {register, control, handleSubmit, formState: { errors } } = useForm({mode: "onBlur"});
  
  const dataAfiliados  = useAxios();

  const [getData, { afiliados, errorA, loadingA }] = useLazyAxios({
    method: 'get',
    url: baseURL+'afiliados.json',
    headers: JSON.stringify({ accept: '*/*' })
  });
  
  const nroCobroIsUnique = (nroCobro) =>{
    const nros_cobros=[];  
  
    for(let i in afiliados)
      nros_cobros.push(afiliados[i].nroSocio);

       return nros_cobros.find(nroCobro);
  }



  const onSubmit =  (userInfo) => {
      
    dataAfiliados.fetchData({
        method: 'post',
        url: baseURL+'/afiliados.json',
        headers: JSON.stringify({ accept: '*/*' }),
        data:{
          id: 5,
          nroSocio: Number(userInfo.nroSocio.substring(0,5)),
          nombre: userInfo.nombre,
          apellido: userInfo.apellido,
          digitoVerificador: Number(userInfo.nroSocio.substring(5,6)),
          direccion: userInfo.direccion,
          telefono: userInfo.telefono,
          email: userInfo.mail,
          fechaNacimiento: "10-10-1987",
          //grado: userInfo.grado._id,
          //ua: userInfo.ua._id,
          //localidad: userInfo.localidad._id
          ua: "DEPARTAMENTO MONTEVIDEO",
          grado: "PROFESIONAL 2A",
          localidad: "MONTEVIDEO"
          

        },  
      })
      
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
                    validate: auxiliares.verificarNroCobro, nroCobroIsUnique,
                   
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
                {errors.nroSocio && errors.nroSocio.type==="validate" && <p>"El formato de nro de cobro no es correcto"</p>}
                {errors.nroSocio && <p>{errors.nroSocio.message}</p>}
              </Item>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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

            {/* <Grid item xs={2}>
              <Item>
                 <Controller
                  control={control}
                  name="dateInput"
                  //fullWidth
                  render={({ field }) => (
                  <DatePicker
                      
                      placeholderText="Fecha"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                      
                    />
                  )}
                /> 
                
              </Item>
            </Grid> */}

            <Grid item xs={12}>
              <Item>
                <TextField
                  id="direccion"
                  name="direccion"
                  label="Dirección"
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register("direccion", {
                    required: messages.required,
                  })}
                />
                {errors.direccion && <p>{errors.direccion.message}</p>}
              </Item>
            </Grid>

            <Grid item xs={7}>
              <Item>
                <Controller
                  control={control}
                  name="grado"
                  defaultValue={null}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={grados}
                      getOptionLabel={(option) => getOpObj(option, grados).name}
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
                  defaultValue={null}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={localidades}
                      getOptionLabel={(option) =>
                        getOpObj(option, localidades).name
                      }
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

            <Grid item xs={7}>
              <Item>
                <Controller
                  control={control}
                  name="ua"
                  defaultValue={null}
                  render={({ field: { onChange, value } }) => (
                    <Autocomplete
                      options={unidades}
                      getOptionLabel={(option) =>
                        getOpObj(option, unidades).name
                      }
                      isOptionEqualToValue={(option, value) =>
                        value === undefined || option._id === value._id
                      }
                      onChange={(event, values) => onChange(values)}
                      value={value}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Unidad Administrativa"
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