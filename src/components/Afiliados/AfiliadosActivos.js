import FiltroAfiliados from "./FiltroAfiliados";
import ListaAfiliados from "./ListaAfiliados";
import NuevoAfiliado from "./NuevoAfiliado";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import NewExcelPDF from "../UI/NewExcelPDF";
import useAxios from "../../hooks/use-axios";
import React from "react";


const AfiliadosActivos = (props) =>{
  
  
  const [addAfiliado, setAddAfiliado] = useState(false);
  const [data, setData] = useState([]);
  const [listFiltrada, setListFiltrada] = useState([]); 
  
  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/afiliados.json',
    headers: JSON.stringify({ accept: '*/*' })
    });

  useEffect(() => {
    
    if(!error && response) {
      setData(response);
      setListFiltrada(response);
    }
 

 }, [response, error]); //supuestamente una vez

  const handlerfilterList = (filtros) => { 
      
    const filtroSocio = filtros.nroSocio.toUpperCase();
    const filtroNombre = filtros.nombre.toUpperCase();
    const filtroApellido = filtros.apellido.toUpperCase();
    const filtroGrado = filtros.grado.toUpperCase();
    const filtroUA = filtros.ua.toUpperCase();
    const filtroLocalidad = filtros.localidad.toUpperCase();
    
    const lista_filtrada = data.filter(afiliado=> afiliado["nroSocio"].toString().includes(filtroSocio) && 
                                                     afiliado["nombre"].includes(filtroNombre) &&
                                                     afiliado["apellido"].includes(filtroApellido) &&
                                                     afiliado["grado"].includes(filtroGrado) &&
                                                     afiliado["ua"].includes(filtroUA) &&
                                                     afiliado["localidad"].includes(filtroLocalidad));
   
    setListFiltrada(lista_filtrada);
  }
  
  const handlerAddDialogOpen = () =>{
    setAddAfiliado(true);
  }
  const handlerAddDialogClose= () =>{
    setAddAfiliado(false);
  }
  const handlerExportExcel= () =>{
    //falta implementacion
  }
  const handlerExportPDF= () =>{
    //falta implementacion
  }

  let mensaje;
  if (error) {
    mensaje = <p> Error </p>;
  }
  if (loading) {
    mensaje = <p> Loading...</p>
  }


    return (
      <>
       <NewExcelPDF openAdd = {handlerAddDialogOpen} exportexcel= {handlerExportExcel} exportpdf = {handlerExportPDF}/>
        
        {addAfiliado && ( <NuevoAfiliado open={addAfiliado} onCloseDialogAddAfiliado={handlerAddDialogClose} />)}
        <Divider sx={{ my: 1 }} />
        <FiltroAfiliados onChangeFilter={handlerfilterList} />
        <Divider sx={{ my: 1 }} />
        
        {loading || error ? mensaje : <ListaAfiliados lista={listFiltrada} />}
        
      </>
    );

};

export default (AfiliadosActivos);