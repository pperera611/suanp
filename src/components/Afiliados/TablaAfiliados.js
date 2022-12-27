import FiltroAfiliados from "./FiltroAfiliados";
import ListaAfiliados from "./ListaAfiliados";
import NuevoAfiliado from "./NuevoAfiliado";
import Divider from "@mui/material/Divider";
import {useEffect, useState } from "react";
import NewExcelPDF from "../UI/NewExcelPDF";

import React from "react";



const TablaAfiliados = (props) =>{

  const [addAfiliado, setAddAfiliado] = useState(false);
  const [listFiltrada, setListFiltrada] = useState([]);

  useEffect(()=>{
    setListFiltrada(props.lista);
  },[props.lista])

  const handlerfilterList = (filtros) => {

    const filtroSocio = filtros.nroSocio.toUpperCase();
    const filtroNombre = filtros.nombre.toUpperCase();
    const filtroApellido = filtros.apellido.toUpperCase();
    const filtroGrado = filtros.grado.toUpperCase();
    const filtroUA = filtros.ua.toUpperCase();
    const filtroLocalidad = filtros.localidad.toUpperCase();

    const lista_filtrada = props.lista.filter(
      (afiliado) =>
        afiliado["nroSocio"].toString().includes(filtroSocio) &&
        afiliado["nombre"].includes(filtroNombre) &&
        afiliado["apellido"].includes(filtroApellido) &&
        afiliado["grado"].includes(filtroGrado) &&
        afiliado["ua"].includes(filtroUA) &&
        afiliado["localidad"].includes(filtroLocalidad)
    );

    setListFiltrada(lista_filtrada);
  };

  const handlerAddDialogOpen = () => {
    setAddAfiliado(true);
  };
  const handlerAddDialogClose = () => {
    setAddAfiliado(false);
  };

  return (
    <>
      <NewExcelPDF botonNew = {props.activo} openAdd={handlerAddDialogOpen} lista={listFiltrada} />

      {addAfiliado && (
        <NuevoAfiliado
          open={addAfiliado}
          onCloseDialogAddAfiliado={handlerAddDialogClose}
        />
      )}
      <Divider sx={{ my: 1 }} />
      <FiltroAfiliados onChangeFilter={handlerfilterList} />
      <Divider sx={{ my: 1 }} />

      <ListaAfiliados lista={listFiltrada} />
    </>
  );
};

export default (TablaAfiliados);