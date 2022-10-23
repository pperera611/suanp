import FiltroAfiliados from "./FiltroAfiliados";
import ListaAfiliados from "./ListaAfiliados";
import NuevoAfiliado from "./NuevoAfiliado";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import NewExcelPDF from "../UI/NewExcelPDF";
import useAxios from "../../hooks/use-axios";
import React from "react";
import * as XLSX from 'xlsx/xlsx.mjs';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const AfiliadosActivos = (props) =>{
  
  const [addAfiliado, setAddAfiliado] = useState(false);
  const [data, setData] = useState([]);
  const [listFiltrada, setListFiltrada] = useState([]); 
  
  

  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/afiliados.json',
    headers: ({ accept: '*/*' })
    });

    //console.log(response);
   
  
   
  useEffect(() => {
    
    if(!error && response) {
      const afiliados = []
      for(let i in response)
        afiliados.push(response[i]);

      setData(afiliados);
      setListFiltrada(afiliados);
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
    
    const workSheet=XLSX.utils.json_to_sheet(listFiltrada)
      const workBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workBook,workSheet,"afiliados")
      //Buffer
      //let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
      //Binary string
      XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
      //Download
      XLSX.writeFile(workBook,"Afiliados.xlsx")
    
  
  }
  const handlerExportPDF= () =>{

    const doc = new jsPDF('landscape','pt','a2');
    doc.text("Afiliados", 20, 20)
    doc.autoTable({
      theme: "grid",
      startY: 25,
    tableWidth: 'auto',
    columnWidth: 'auto',
    styles: { overflow: '', cellWidth: 'wrap' },
    // Override the default above for the text column
    columnStyles: { text: { cellWidth: 'wrap' } },
      
      //hay que elegir bien las columnas porque se sale de la pagina
      columns: [{header:"Apellido", dataKey:"apellido"},
                //{header:"Digito Verificador", dataKey:"digitoVerificador"},
                {header:"Direccion", dataKey:"direccion"},
                {header:"Email", dataKey:"email"},
                {header:"Fecha Nac.", dataKey:"fechaNacimiento"},
                {header:"Grado", dataKey:"grado"},
                //{header:"Identificador", dataKey:"id"},
                {header:"Localidad", dataKey:"localidad"},
                {header:"Nombre", dataKey:"nombre"},
                {header:"Nro Socio", dataKey:"nroSocio"},
                {header:"Telefono", dataKey:"telefono"},
                {header:"Unidad Administrativa", dataKey:"ua"}],
       
      body: listFiltrada
    })
    doc.save('Afiliados.pdf')
  
  }

  let mensaje;
  if (error) {
    mensaje = <div> Error </div>;
  }
  if (loading) {
    mensaje = <div> Loading...</div>
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