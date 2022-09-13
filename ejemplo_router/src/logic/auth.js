import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:3000/";
let refresh = false;
export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return  localStorage.getItem('token');
  },
 
  login(user, pass) {
    const userLogIn = { user, pass };
    return axios.post(ENDPOINT_PATH + "login", userLogIn)
  }
  


};


axios.interceptors.response.use(resp => resp, async error => {
  if (error.response.status === 401 && !refresh) {
      refresh = true;

      const {status, data} = await axios.post('refresh-token',localStorage.getItem('refresh_token'), {
          withCredentials: true
      });

      if (status === 200) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          
          return axios(error.config);
      }
  }
  refresh = false;
  return error;
})