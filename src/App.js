import "./App.js";
import { app } from "./firebase";
import { useEffect , useState } from "react";
import {onAuthStateChanged, getAuth ,signOut} from "firebase/auth";
// import {getDatabase ,ref ,set} from "firebase/database"
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";

// const db = getDatabase(app);
const auth = getAuth(app);

function App() {

  const [user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
        //You are logged in
        console.log("Hello ", user.email);
        setUser(user);
      }
      else
      {
        //User is logged out
        console.log("You are Logged out");
        setUser(null);
      }
    })
  },[])
  

  if(user === null)
  {
    return (
      <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Dashboard/>} />
            <Route path="signin" element={<Signin/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  
      </div>
  
    );
  }
  
  return (
    <div className="App">
      <h1>Hello {user.email} !</h1>
      <br />
      <button type="button" onClick={()=>signOut(auth)}>LogOut</button>

    </div>
  );

  
}

export default App;
