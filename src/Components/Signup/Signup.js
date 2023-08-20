import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';


export default function Signup() {

  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)

  const [username,setUsername] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:username,
          phone:phone
        })
      )
      history.push('/login')
    }).catch(err=>{
      alert(err)
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img src={Logo} alt='olx-logo' ></img>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            onChange={(e)=>{ setUsername(e.target.value) }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e)=>{ setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            onChange={(e)=>{ setPhone(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e)=>{ setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
         <Link to='/login' >Login</Link>

      </div>
    </div>
  );
}
