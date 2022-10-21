import React, { Fragment } from "react";
import Helmet from 'react-helmet'
import { Link } from "react-router-dom";
 


function Home() {
  <>
  <Helmet><title>Home</title></Helmet>
  <div id="home">
    <section className="wrapper">
      <div>
        <img src="https://i.pinimg.com/564x/db/c3/fb/dbc3fbc1ccfb74a1bd8697abaa7c07d8.jpg"/>
      </div>
      <h1>Climate Quiz App</h1>

      <div className="auth-container">
        <Link className="auth-button" to="/login">Login</Link>
        <Link className="auth-button" to="/signup">Signup</Link>
      </div>
    </section>

  </div>
  </>
}

export default Home;
