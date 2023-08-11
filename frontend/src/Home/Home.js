import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Home = () => {
  const location =useLocation();
  const userLogin = useSelector((state) => state.userLogin);
  const { userinfo } = userLogin;
  return (
    <div>
     <h1>{`Welcome Back ${userinfo.name}..`}</h1>
    </div>
  )
}

export default Home
