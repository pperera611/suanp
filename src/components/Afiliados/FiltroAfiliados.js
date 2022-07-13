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
import Autocomplete from '@mui/material/Autocomplete';

const localidades = ["Montevideo","Colonia","Paysandu"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FiltroAfiliados = (props) => {

    const handlerChangeNroSocio = (event) =>{
        props.onChangeFilter("nro-socio",event.target.value);
        console.log("entro change nro socio");
    }
    const handlerChangeNombre = (event) =>{
      props.onChangeFilter("nombre",event.target.value);
      console.log("entro change nombre");
  }


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
                  id="apellido"
                  label="Apellido"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Autocomplete
                  disablePortal
                  id="localidad"
                  options={localidades}
                  
                  size="small"
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Localidad" />
                  )}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="grado"
                  label="Grado"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="ua"
                  label="Descripción UA"
                  variant="outlined"
                  size="small"
                  fullWidth
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
