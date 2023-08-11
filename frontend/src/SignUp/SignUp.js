import axios from 'axios';
import {React,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Errormsg from '../handler/Errormsg'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name,setName]=useState("");
    const [company,setCompany]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setconfirmPassword]=useState("");
    const [mobile,setMobile]=useState("");
    const [message,setMessage]=useState("");
    // const [error,setError]=useState("");
    const dispatch = useDispatch();
    const history =useNavigate();
    const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userinfo } = userRegister;
    useEffect(()=>{
      if(userinfo){
        history("/");
      }
    },[history,userinfo])
    
  
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password!=confirmPassword){
          setPassword("Password dont match");
        }else{
          dispatch(register(name,email,mobile,password))
        }
        
    }
   
  return (
    <>
    <div class="container">
    <h1 class="brand">Register</h1>
    <div class="wrapper">
      <div class="company-info">
       
       
      </div>
      <div className="contact">
      {error && <Errormsg variant="danger">{error}</Errormsg>}
      {message && <Errormsg variant="danger">{message}</Errormsg>}
     
        <form id="contactForm">
          <p>
            <label>Name</label>
            <input type="text" name="name" value={name} id="name" required onChange={(event)=>{
                setName(event.target.value);
            }}/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" value={email} id="email" required
            onChange={(event)=>{
                setEmail(event.target.value);
            }}/>
          </p>
          <p>
            <label>Password</label>
            <input type="password" name="password" value={password} id="password" required
            onChange={(event)=>{
                setPassword(event.target.value);
            }}/>
          </p>
          <p>
          <label>Confirm Password</label>
            <input type="password" name="password"value={confirmPassword} id="password" required
            onChange={(event)=>{
                setconfirmPassword(event.target.value);
            }}/>
          </p>
          
          <p>
            <label>Phone Number</label>
            <input type="text" name="mobile" value={mobile} id="phone"
            onChange={(event)=>{
                setMobile(event.target.value);
            }}/>
          </p>
          
          <p className="full">
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>

    </>
  )
}
  


export default SignUp
