import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
//import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState} from "react";
import SelectLocalidad from "../UI/SelectLocalidad";

//const localidades = ["Montevideo", "Colonia", "Paysandu"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FiltroAfiliados = (props) => {
  
  const [filtros, setFiltros] = useState({nroSocio: "" , nombre:"" , apellido:"", grado:"", ua: "", localidad: ""});


  const handlerChangeNroSocio = (event) => {
    const nroSocio = event.target.value;
    //console.log(nroSocio);
    setFiltros((prevState) => {
      return {...prevState, nroSocio: nroSocio};
    })
  };

  const handlerChangeNombre = (event) => {
    const nombre = event.target.value;
    setFiltros((prevState) => {
      return {...prevState,nombre: nombre};
    })
  };

  const handlerChangeApellido = (event) => {
    const apellido = event.target.value;
    setFiltros((prevState) => {
      return {...prevState,apellido: apellido};
    })
  };

  const handlerChangeLocalidad = (value) => {
    let localidad;
    if (value ===null){
      localidad = "";
    }
    else{
       localidad = value;
    }
    setFiltros((prevState) => {
      return {...prevState,localidad: localidad};
    })
  };

  const handlerChangeGrado = (event) => {
    const grado = event.target.value;
    setFiltros((prevState) => {
      return {...prevState,grado: grado};
    })
  };

  const handlerChangeUA = (event) => {
    const ua = event.target.value;
    setFiltros((prevState) => {
      return {...prevState,ua: ua};
    })
  };




 //const filtrar = props.onChangeFilter;



 useEffect(()=>{
  const filtro_copia = {...filtros}
  //filtrar(filtro_copia);
  props.onChangeFilter(filtro_copia);
 },[filtros])


  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="filtro">
          <Typography>Filtros:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Item>
                <TextField
                  value={filtros.nroSocio}
                  id="nro-socio"
                  label="Nro de Socio"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handlerChangeNroSocio}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <TextField
                  value={filtros.nombre}
                  id="nombre"
                  label="Nombre"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handlerChangeNombre}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TextField
                  value={filtros.apellido}
                  id="apellido"
                  label="Apellido"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handlerChangeApellido}
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <SelectLocalidad onSelected={handlerChangeLocalidad}/>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  value={filtros.grado}
                  id="grado"
                  label="Grado"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handlerChangeGrado}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="ua"
                  label="Descripci??n UA"
                  variant="outlined"
                  size="small"
                  fullWidth
                  onChange={handlerChangeUA}
                />
              </Item>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FiltroAfiliados;
