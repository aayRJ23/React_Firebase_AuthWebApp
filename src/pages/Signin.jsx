import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";

const auth=getAuth(app);

const Signin = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signinUser=()=>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Signed In Successfully");
            setEmail("");
            setPassword("");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            alert(errorCode,errorMessage);
        });
    }

  return (
    <div>
      <div className='signin-page'>
      <h2>SignIn Here</h2>
      <label htmlFor="email">Email :</label>
      <input type="email" required placeholder="Enter your email here" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      <br />
      <label htmlFor="password">Password :</label>
      <input type="password" required placeholder="Enter your password here" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      <br /><br />
      <button type="button" onClick={signinUser}>SignIn</button>
    </div>
    </div>
  )
}

export default Signin
