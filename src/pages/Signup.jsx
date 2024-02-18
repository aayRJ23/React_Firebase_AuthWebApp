import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { app } from '../firebase';
import "./button.css"

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user= userCredential.user;
            console.log(user);
            alert("New User Registered Successfully");
            setEmail("");
            setPassword("");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode , errorMessage);
          });
    }

    const signupWithGoogle= () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log({credential , token , user});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({errorCode,errorMessage,email,credential});
     });
    }


  return (
    <div className='signup-page'>
        <h2>SignUp Here</h2>
      <label htmlFor="email">Email :</label>
      <input type="email" required placeholder="Enter your email here" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      <br />
      <label htmlFor="password">Password :</label>
      <input type="password" required placeholder="Enter your password here" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      <br /><br />
      <button type="button" onClick={createUser} >SignUp</button>
      <br />
      <br />
      <button type="button" onClick={signupWithGoogle} className="login-with-google-btn" >SignIn with Google</button>
    </div>
  )
}

export default Signup
