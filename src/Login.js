import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'


const DEFAULT_INFO = {
  email: "",
  password: ""
}


function Login(props) {

  const history = useHistory()
  const [loginInfo, setloginInfo] = useState(DEFAULT_INFO)

  const handleChange = e => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }

  const login = e => {
    e.preventDefault() //this stops the refresh
    auth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then((auth) => {
        //logged in , redirect to homepage
        history.push('/')
      })
      .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault() //this stops the refresh
    //register stuff
    auth.createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(auth => {
        //created a user and logged in , redirecto to homepage
        history.push('/')
      })
      .catch(err => err.message)
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input value={loginInfo.email} type="email" name="email" onChange={handleChange} />
          <h5>Password</h5>
          <input value={loginInfo.password} type="password" name="password" onChange={handleChange} />
          <button
            type="submit"
            className="login__signInButton"
            onClick={login}
          >Sign in</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button
          onClick={register}
          className="login__signUpButton">Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
