import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://suanp-f6399-default-rtdb.firebaseio.com/';

export const useAxios = (axiosParams) => {
  
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  const fetchData = async (params) => {

    try {
      const result = await axios.request(params);
      setResponse(result.data);
      } catch( error ) {
        setError(error);
      } finally {
      setLoading(false);
      }
    };
    
  useEffect(() => {
    if (!response && !error){
      fetchData(axiosParams);
    }
    
  }, [axiosParams, response, error]); // execute once only
  
  return { response, error, loading};
  
};

export default useAxios;
