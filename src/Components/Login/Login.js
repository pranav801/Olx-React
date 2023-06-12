import React, { useState,useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';




function Login() {

  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)

  const [email,setemail] = useState()
  const [password,setPassword] = useState()

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,String(password)).then((result)=>{
      history.push('/')
    }).catch(err=>{
      alert(err)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img src={Logo} alt='olx-img' ></img>
        <form onSubmit={(e)=>handleLogin(e)}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>{ setemail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>{ setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' >Signup</Link>
      </div>
    </div>
  );
}

export default Login;
