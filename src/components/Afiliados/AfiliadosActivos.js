import FiltroAfiliados from "./FiltroAfiliados";
import ListaAfiliados from "./ListaAfiliados";
import NuevoAfiliado from "./NuevoAfiliado";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


const DUMMY_DATA = [
    {
      id: 1,
      nroSocio: 16338,
      digitoVerificador: 6,
      nombre: "PABLO",
      apellido: "PERERA",
      fechaNacimiento: "06/11/1987",
      direccion: "Canelones 1625 / Apto 501",
      telefono: "099340502",
      email: "pperera611@gmail.com",
      localidad: "MONTEVIDEO",
      grado: "PROFESIONAL 1A",
      ua: "UNIDAD DESARROLLO Y MANTENIMIENTO INFORMATICO"
    },
    {
      id: 2,
      nroSocio: 16123,
      digitoVerificador: 4,
      nombre: "ALVARO",
      apellido: "RECOBA",
      fechaNacimiento: "17/12/1979",
      direccion: "8 de octubre 1899",
      telefono: "099123456",
      email: "chino20@gmail.com",
      localidad: "MONTEVIDEO",
      grado: "SUPERVISOR",
      ua: "UNIDAD MUELLE PESQUERO"
    },
    {
      id: 3,
      nroSocio: 14456,
      digitoVerificador: 3,
      nombre: "LUIS",
      apellido: "SUAREZ",
      fechaNacimiento: "29/01/1987",
      direccion: "Avda de los cracks 2014",
      telefono: "099321123",
      email: "lucho9@outlook.com",
      localidad: "SALTO",
      grado: "JEFE DEPARTAMENTO",
      ua: "DEPARTAMENTO FLOTA Y DRAGADO"
    },
    {
      id: 4,
      nroSocio: 15789,
      digitoVerificador: 2,
      nombre: "OSCAR",
      apellido: "MORALES",
      fechaNacimiento: "05/08/1982",
      direccion: "Jose Maria Ramirez 2121",
      telefono: "099022345",
      email: "ojota21@gmail.com",
      localidad: "MONTEVIDEO",
      grado: "ADMINISTRATIVO IV",
      ua: "UNIDAD FACTURACION Y CREDITO"
    }
];


const AfiliadosActivos = (props) =>{

  const [list, setList] = useState(DUMMY_DATA);
  const [addAfiliado, setAddAfiliado] = useState(false);


  const handlerfilterList = (filtros) =>{ 
      
    const filtroSocio = filtros.nroSocio.toUpperCase();
    const filtroNombre = filtros.nombre.toUpperCase();
    const filtroApellido = filtros.apellido.toUpperCase();
    const filtroGrado = filtros.grado.toUpperCase();
    const filtroUA = filtros.ua.toUpperCase();
    const filtroLocalidad = filtros.localidad.toUpperCase();
    
    const listaFiltrada = DUMMY_DATA.filter(afiliado=> afiliado["nroSocio"].toString().includes(filtroSocio) && 
                                                     afiliado["nombre"].includes(filtroNombre) &&
                                                     afiliado["apellido"].includes(filtroApellido) &&
                                                     afiliado["grado"].includes(filtroGrado) &&
                                                     afiliado["ua"].includes(filtroUA) &&
                                                     afiliado["localidad"].includes(filtroLocalidad));
    //falta localidad
    console.log(filtroLocalidad);
    setList(listaFiltrada);  
    console.log(listaFiltrada);
  }
  
  const handlerAddDialogOpen = () =>{
    setAddAfiliado(true);
  }
  const handlerAddDialogClose= () =>{
    setAddAfiliado(false);
  }


    return(
      <>
        <Box onClick={handlerAddDialogOpen} sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          borderRadius: 1,
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
      <Fab color="secondary" aria-label="add">
        <AddIcon/>
        
       </Fab>
       </Box>
       {addAfiliado && <NuevoAfiliado open ={addAfiliado} onCloseDialogAddAfiliado={handlerAddDialogClose}/>}
       <Divider sx={{ my: 1 }} />
        <FiltroAfiliados onChangeFilter = {handlerfilterList}/> 
        <Divider sx={{ my: 1 }} />
        <ListaAfiliados lista={list}/>
        
      </>
    );

};

export default AfiliadosActivos;