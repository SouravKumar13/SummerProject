import React from 'react'
import { Link } from "react-router-dom";
import locimg from "./img/location.jpeg"
import lagoo from './img/logoo.jpeg'
import phone from "./img/phone.jpeg"
import email from "./img/email.jpeg"
import twitter from "./img/twitter.jpeg"
import insta from "./img/instagram.jpeg"
import  yt from "./img/youtube logo.jpeg"
import "./Footer.css";

function Footer() {
  return (
    <>  
       <br /><br /><br /><br />
        <div className="container3i">
          <div className="one">
            <ul>
              <li><img src={locimg} alt="error" height={30} />UIET,PU,SEC-25,CHD</li><br />
              <li><img src={phone} alt="error" height={30} />1234567890</li><br />
              <li><img src={email} alt="error" height={30} />
                123@gmail.com</li>
            </ul>
          </div>
          <div className="two">
            <h3 align="center">
            <img src={lagoo} alt="error" height={30} />Fitrack
            </h3>
          </div>
          <div className="three">
            <Link to="https://twitter.com"><img src={twitter} alt="error" height={30} /></Link>
            <Link to="https://instagram.com"><img src={insta} alt="error" height={30} /></Link>
            <Link to="https://youtube.com"><img src={yt} alt="error" height={30} /></Link>
          </div>
        </div>         

    </>
  )
}

export default Footer;