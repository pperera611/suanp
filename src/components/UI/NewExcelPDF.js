
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import {Stack } from '@mui/material';

/* 

*/

const NewExcelPDF = (props)  => {
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
        onClick={props.exportexcel}
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
            <img src="https://img.icons8.com/material/24/FFFFFF/export-excel.png" alt="Exportar a excel"/>
        </Fab>
      </Box>
      <Box
        onClick={props.exportpdf}
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
            <img src="https://img.icons8.com/material/24/FFFFFF/export-pdf.png" alt="Exportar a PDF"/>
        </Fab>
      </Box>
    </Stack>
    
  );
}

export default NewExcelPDF;