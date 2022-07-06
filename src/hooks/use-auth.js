
import { useContext } from "react";
import AuthContext from '../store/auth-context';

const useAuth = (props) => {
    return useContext(AuthContext);
  };

export default useAuth;