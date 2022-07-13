import FiltroAfiliados from "./FiltroAfiliados";
import ListaAfiliados from "./ListaAfiliados";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const DUMMY_DATA = [
    {
      id: 1,
      nroSocio: 16338,
      digitoVerificador: 6,
      nombre: "Pablo",
      apellido: "Perera",
      fechaNacimiento: "06/11/1987",
      direccion: "Canelones 1625 / Apto 501",
      telefono: "099340502",
      email: "pperera611@gmail.com",
      localidad: "Montevideo",
      grado: "PROFESIONAL 1A",
      ua: "UNIDAD DESARROLLO Y MANTENIMIENTO INFORMATICO"
    },
    {
      id: 2,
      nroSocio: 16123,
      digitoVerificador: 4,
      nombre: "Alvaro",
      apellido: "Recoba",
      fechaNacimiento: "17/12/1979",
      direccion: "8 de octubre 1899",
      telefono: "099123456",
      email: "chino20@gmail.com",
      localidad: "Montevideo",
      grado: "SUPERVISOR",
      ua: "UNIDAD MUELLE PESQUERO"
    },
    {
      id: 3,
      nroSocio: 14456,
      digitoVerificador: 3,
      nombre: "Luis",
      apellido: "Suarez",
      fechaNacimiento: "29/01/1987",
      direccion: "Avda de los cracks 2014",
      telefono: "099321123",
      email: "lucho9@outlook.com",
      localidad: "Montevideo",
      grado: "JEFE DEPARTAMENTO",
      ua: "DEPARTAMENTO FLOTA Y DRAGADO"
    },
    {
      id: 4,
      nroSocio: 15789,
      digitoVerificador: 2,
      nombre: "Oscar",
      apellido: "Morales",
      fechaNacimiento: "05/08/1982",
      direccion: "Jose Maria Ramirez 2121",
      telefono: "099022345",
      email: "ojota21@gmail.com",
      localidad: "Montevideo",
      grado: "ADMINISTRATIVO IV",
      ua: "UNIDAD FACTURACION Y CREDITO"
    }
]


const AfiliadosActivos = (props) =>{

  const [list, setList] = useState(DUMMY_DATA);
  const [filtroSocio, setFiltroSocio] = useState("");
  const [filtroNombre, setFiltroNombre] = useState("");

  const handlerfilterList = (tipo, value) =>{
     
    if (tipo==="nro-socio"){
      setFiltroSocio(value.toString());
      console.log(filtroSocio);
    }
    if (tipo==="nombre"){
      setFiltroNombre(value);
      console.log(filtroNombre);
    }

    const listaFiltrada = DUMMY_DATA.filter(afiliado=> afiliado["nroSocio"].toString().includes(filtroSocio) && 
                                                     afiliado["nombre"].includes(filtroNombre));
    
    setList(listaFiltrada);  
    console.log(listaFiltrada);
  } 


    return(
      <>
       <FiltroAfiliados onChangeFilter = {handlerfilterList}/> 
       <Divider sx={{ my: 1 }} />
       <ListaAfiliados lista={list}/>
      </>
    );

};

export default AfiliadosActivos;