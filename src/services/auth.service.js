import axios                from "axios";

const API_URL             = "htto://localhost:8080/auth/";

/**
 *
 * @constructor
 */

const AuthService         = () => {

/**
  *
  * @param username
  * @param password
  * @returns {*}
  */

  const login             = (username, password) => {
    return axios
      .post (
        API_URL + "login",
        {
          username,
          password
        }
      )
      .then (response => {
        if (response.data.accessToken) {
          localStorage.setItem ("user", JSON.stringify (response.data));
        }

        return response.data;
      });
  }


/**
  *
  */

  const logout            = () => {
    localStorage.removeItem ("user");
  }


/**
  *
  * @param username
  * @param email
  * @param password
  * @returns {*}
  */

  const register          = (username, email, password) => {
    return axios
      .post (
        API_URL + "register",
        {
          username,
          email,
          password
        }
      )
      .then (response => console.log ("TODO"));
  }


/**
  *
  * @returns {any}
  */

  const getCurrentUser    = () => {
    return JSON.parse (
      localStorage.getItem('user')
    );
  }

}

export default new AuthService ();