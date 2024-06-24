import React, { useState,} from "react";

import TonaL from "../../components/image/Tonasign3.png"
import "./login.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../util/Firebaseconfig";


function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error,setError]=useState("");
 
  const navigate = useNavigate();
  const signIn =  (e) => {
    e.preventDefault;
    
    signInWithEmailAndPassword(auth,Email,Password)
    .then((curentuser)=>{
     
      if(curentuser) navigate('/')
        
    })
    .catch((error)=> setError(error.message))
    
  };
  const register =  (e) => {
    e.preventDefault;
   createUserWithEmailAndPassword(auth,Email,Password)
   .then((curentuser)=>{
    if(curentuser) navigate('/')
   })
   .catch((error)=> setError(error.message))
  };
 
  return (
    <div className="login">
      <div className="login__container ">
        <Link to='/'>
        
        <img
          className="login__logo"
          src={TonaL}
          alt=""
        />
        </Link>
        <h1>sign in</h1>
        <form action="#">
          <h5>email</h5>

          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            required
          />

          <h5>password</h5>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            required
          />

          <button
            type="submit"
            
            onClick={signIn}
            className="login__signInButton"
          >
            sign in
            
          </button>
        </form>

        <p>
          By signing-in you agree to the Tona shopping Conditions of Use &
          Sale. Please see our Privacy Notice, our Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton ">
          Create your Tona account
        </button>
        {
          error && <small style= {{paddingTop:"5px",color:"red"}}>{error}</small>
        }
      </div>
    </div>
  );
}

export default Login;
