import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Lndingpg from './Landingpage/Lndingpg';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Header/>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Lndingpg/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/signup" element={<SignUp/>} exact/>
        <Route path="/home" element={<Home/>} exact/>
        <Route path="/profile" element={<Profile/>} exact/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
