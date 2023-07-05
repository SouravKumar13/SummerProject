import React from 'react'
import { Link } from "react-router-dom";
import lagoo from "./logoo.jpeg"

const Header = () => {

  return (
    <>
      <div className="name">
        <img src={lagoo} alt="error" height={40} />Fitrack</div>
      <div className="header">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/Whyjoin">Benefits</Link></li>
          <li><Link to="/Contact">Contact us</Link></li>
          <li><Link to="/Tasks">Instructors</Link></li>
          <li><Link to="/Challenges">Challenges</Link></li>
          <li><Link to="/DesignedPLans">DesignedPlans</Link></li>
          <li><Link to="/Login">Log out</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
// {/* <div style={{backgroundColor:"bisque",padding:4 ,border:4,color:"red"}}>Header</div> */}