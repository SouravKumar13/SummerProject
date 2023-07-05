import React from 'react'
import classes from "./img/classes.png"
import blog from "./img/blog-1.jpg";
import authora from "./img/author-a.png"
import { Link } from "react-router-dom";
import videobanner from "./img/video-banner.jpg"
function Home() {
    return (
        <>
            <div className="textonim">
                <img src={videobanner} alt="error" width={1400} height={450} />
                <h3 className='texti' ALIGN="center">Fitness is not a destination but a journey</h3>
                <Link to="/DesignedPlans"><button className="btnim">Join</button></Link>
            </div>
            <h3 ALIGN="center">NO PAIN NO GAIN</h3>
            <div className="container01">
                <div className="item01">
                    <Link to="/DesignedPlans"> <img src={classes} alt="Cardio" width={400} height={300} /></Link>
                    <h1>Cardio</h1>
                </div>
                <div className="item01">
                    <Link to="/DesignedPlans"><img src={blog} alt="Strength Training" width={400} height={300} /></Link>
                    <h1>Strength Training</h1>
                </div>
                <div className="item01">
                    <a href="/DesignedPlans"><img src={authora} alt="Yoga" width={400} height={300} /></a>
                    <h1>Yoga</h1>
                </div>
            </div>
            <br />
            <h3 ALIGN="center">Strong Body, Strong Mind</h3>
        </>
    )
}

export default Home;
