import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import Errormsg from '../handler/Errormsg'
import Loading from '../handler/Loading'
import { login } from '../actions/userActions'
import { useDispatch,useSelector } from 'react-redux'
const Login = ({history}) => {
    // const history =useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
   
   const dispatch=useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userinfo } = userLogin;
  history=useNavigate();
    useEffect(()=>{
       
        const userinfo = localStorage.getItem("userinfo");
            if(userinfo){
               history("/home");
            }
    },[history,userinfo]);
    const signin=async(e)=>{
     e.preventDefault();
    dispatch(login(email,password));
    }


  return (
  <>
    <div className="bgform">
    <div class="formContainer">
        {error && <Errormsg variant="danger">{error}</Errormsg>}
        {loading && <Loading />}
    <form action="" method="post">
        <h1>Sign In</h1>
        <p className="newuser">New User?<span><a href="/RegSeller">Create an account</a></span></p>
		<h5>Enter Credentials Here:</h5>
        <h4 className='head'>Email:</h4>
		<input type="email"
			placeholder="email here" id="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}/>

		<br />
        <h4 className='head'>Password:</h4>
		<input type="password"
			placeholder="password here" id="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
		<br />
<button type='submit' onClick={signin}>SignIn</button>
</form>
</div>
</div>
</>
  )

        }
export default Login
