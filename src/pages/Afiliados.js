import React from 'react';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "../components/UI/TabPanel";
import useAxios from "../hooks/use-axios";
import TablaAfiliados from "../components/Afiliados/TablaAfiliados";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
 
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Afiliados() {
  
  const [value, setValue] = React.useState(0);
  const [afiliadosActivos, setAfiliadosActivos] = useState([]);
  const [afiliadosInactivos, setAfiliadosInactivos] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/afiliados.json",
    headers: { accept: "*/*" },
  });

  //console.log(response);

  useEffect(() => {

    if (!error && response) {
      const af_activos = [];
      const af_inactivos = [];
      for (let i in response) {
        if (response[i].activo)
          af_activos.push(response[i]);
        else
          af_inactivos.push(response[i]);
      }
      setAfiliadosActivos(af_activos);
      setAfiliadosInactivos(af_inactivos);
      
    }
  }, [response, error]); //supuestamente una vez


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let mensaje;
  if (error) {
    mensaje = <div> Error </div>;
  }
  if (loading) {
    mensaje = <div> Loading...</div>;
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Afiliados Activos" {...a11yProps(0)} />
          <Tab label="Afiliados Inactivos" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      {loading || error ? mensaje : <TablaAfiliados lista={afiliadosActivos} activo ={true}/>}
      </TabPanel>
      <TabPanel value={value} index={1}>
      {loading || error ? mensaje : <TablaAfiliados lista={afiliadosInactivos} activo ={false}/>}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}