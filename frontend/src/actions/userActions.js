// const history =useNavigate();
// const [email,setEmail]=useState("");
// const [password,setPassword]=useState("");
// const [error,setError]=useState(false);

// useEffect(()=>{
//     const userinfo = localStorage.getItem("userinfo");
//     if(userinfo){
//         history("/home",{state:{name:userinfo.name}});
//     }
// },[history]);
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
  } from "../constants/userConstants";
import axios from "axios";
 export const login=(email,password)=>async(dispatch)=>{
//  e.preventDefault();
 dispatch({ type: USER_LOGIN_REQUEST });

 try{
const config={
headers:{
    "Content-type":"application/json"
},
};
const {data}=await axios.post('/api/users/login',{
email,password
},config);
dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
console.log(data);
localStorage.setItem("userinfo",JSON.stringify(data))
     }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
     }
    }
    export const logout = () => async (dispatch) => {
      localStorage.removeItem("userinfo");
      dispatch({ type: USER_LOGOUT });
    };
    export const register = (name, email,mobile, password) => async (dispatch) => {
      try {
        dispatch({ type: USER_REGISTER_REQUEST });
    
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
    
        const { data } = await axios.post(
          "/api/users",
          { name,email,mobile,password },
          config
        );
    
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    
        localStorage.setItem("userinfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
    export const updateProfile = (user) => async (dispatch, getState) => {
      try {
        dispatch({ type: USER_UPDATE_REQUEST });
    
        const {
          userLogin: { userinfo },
        } = getState();
    
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userinfo.token}`,
          },
        };
    
        const { data } = await axios.post("/api/users/profile", user, config);
    
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    
        localStorage.setItem("userinfo", JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_UPDATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };