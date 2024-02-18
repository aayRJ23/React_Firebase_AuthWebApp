import React from 'react'
import {Link,Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
