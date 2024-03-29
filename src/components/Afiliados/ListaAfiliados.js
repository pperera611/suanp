import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ModificarAfiliado from './ModificarAfiliado';


//import IconsOptions from "../UI/IconsOptions"; 


const columns = [
  { id: 'nombre', label: 'Nombre', minWidth: 100 },
  { id: 'apellido', label: 'Apellido', minWidth: 100 },
  { id: 'nroSocio', label: 'Nro de Socio', minWidth: 60},
  { id: 'grado', label: 'Grado', minWidth: 170},
  { id: 'ua', label: 'Unidad Administrativa', minWidth: 170},
  { id: 'localidad', label: 'Localidad', minWidth: 100, align: 'right'},
  
];

export default function ListaAfiliados(props) {

  const rows = props.lista;
   /*
  const rows = [];
  for(let i in props.lista)
  rows.push(props.lista[i]);
 */
     
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 

 //console.log("lista: "+rows);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ }}> {/*maxHeight: 440*/} 
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
           
            <TableRow key={Math.random()}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                  key="opciones"
                  align="center"
                  style={{ minWidth: 60 }}
                >
                  Opciones
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {              
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      //console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Stack direction="row" spacing={0}>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>

                        <IconButton aria-label="edit">
                          <ModificarAfiliado nroCobro={row.nroSocio} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página"
      />
    </Paper>
  );
}