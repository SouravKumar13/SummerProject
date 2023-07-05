import React from 'react'
import classes from "./img/classes.png"
import blog from "./img/blog-1.jpg";
import authora from "./img/author-a.png"
import { Link } from 'react-router-dom';

function DesignedPlans() {
  return (
    <>
       <br />
      <h1 ALIGN="center">Join Plans</h1>
      <div>
        <div className="container01">
          <div className="item01">
            <h2>Cardio Plans</h2>
            <img src={classes} alt="Cardio Img" width={400} height={300} />
            <h2>$130</h2>
            <button className="bttn">Buy</button>
          </div>
          <div className="item01">
            <h2>Strength Training Plans</h2>
            <img src={blog} alt="Strength Training Img" width={400} height={300} />
            <h2>$140</h2>
            <button className="bttn">Buy</button>
          </div>
          <div className="item01">
            <h2>Yoga Plans</h2>
            <img src={authora} alt="Yoga Img" width={400} height={300} />
            <h2>$100</h2>
            <button className="bttn">Buy</button>
          </div>
        </div></div>
      <br /><br /><br /><br />
      <Link to="/home" id='homei'><button>Home</button></Link>
      <br />
    </>
  )
}

export default DesignedPlans
