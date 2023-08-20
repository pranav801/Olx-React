import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext'
import { FirebaseContext } from '../../store/Context'
import './View.css';

function View() {

  const [seller,setSeller] = useState('')

  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(element => {
        element.map((result)=>{
          console.log('This is Anono =>> ',result);
        })
      });
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails?.name}</span>
          <p>{postDetails?.category}</p>
          <span>{postDetails?.createdAt}</span>
        </div>
        { seller &&
        <div className="contactDetails">
          <p>{seller?.username}</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      }
      </div>
    </div>
  );
}
export default View;
