import axios                from 'axios';
import authHeader           from "./auth-header";

const API_URL             = "http://localhost:3000/api/test";

const UserService         = () => {

  const getPublicContent  = () => {
    return axios.get (API_URL + 'all');
  }

  const getUserContent () = () => {
    return axios.get (
      API_URL + 'user',
      {
        headers: authHeader ()
      }
    );
  }

  const getModeratorContent = () {
    return axios.get (
      API_URL + 'mod',
      {
        headers: authHeader ()
      }
    );
  }

  const getAdminContent = () {
    return axios.get (
      API_URL + 'admin',
      {
        headers: authHeader ()
      }
    );
  }
}

export default new UserService ();