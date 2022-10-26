import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import {Stack } from '@mui/material';
import * as XLSX from 'xlsx/xlsx.mjs';
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const NewExcelPDF = (props)  => {
  //parametrizar para que la exportacion sea para varias  cosas distintas

  const handlerExportExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(props.lista);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "afiliados");
    //Buffer
    //let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "Afiliados.xlsx");
  };
  const handlerExportPDF = () => {
    const doc = new jsPDF("landscape", "pt", "a2");
    doc.text("Afiliados", 20, 20);
    doc.autoTable({
      theme: "grid",
      startY: 25,
      tableWidth: "auto",
      columnWidth: "auto",
      styles: { overflow: "", cellWidth: "wrap" },
      // Override the default above for the text column
      columnStyles: { text: { cellWidth: "wrap" } },

      //hay que elegir bien las columnas porque se sale de la pagina
      columns: [
        { header: "Apellido", dataKey: "apellido" },
        //{header:"Digito Verificador", dataKey:"digitoVerificador"},
        { header: "Direccion", dataKey: "direccion" },
        { header: "Email", dataKey: "email" },
        { header: "Fecha Nac.", dataKey: "fechaNacimiento" },
        { header: "Grado", dataKey: "grado" },
        //{header:"Identificador", dataKey:"id"},
        { header: "Localidad", dataKey: "localidad" },
        { header: "Nombre", dataKey: "nombre" },
        { header: "Nro Socio", dataKey: "nroSocio" },
        { header: "Telefono", dataKey: "telefono" },
        { header: "Unidad Administrativa", dataKey: "ua" },
      ],

      body: props.lista,
    });
    doc.save("Afiliados.pdf");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Box
        onClick={props.openAdd}
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 1,
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>

      <Box
        onClick={handlerExportExcel}
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 1,
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Fab color="secondary" aria-label="excel">
          <img
            src="https://img.icons8.com/material/24/FFFFFF/export-excel.png"
            alt="Exportar a excel"
          />
        </Fab>
      </Box>
      <Box
        onClick={handlerExportPDF}
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 1,
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Fab color="secondary" aria-label="pdf">
          <img
            src="https://img.icons8.com/material/24/FFFFFF/export-pdf.png"
            alt="Exportar a PDF"
          />
        </Fab>
      </Box>
    </Stack>
  );
}

export default NewExcelPDF;