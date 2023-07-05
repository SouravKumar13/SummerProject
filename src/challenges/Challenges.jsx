import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCollapseExample from './Accordion.jsx';
import Chacarousel from './Carousel.jsx';
import ChaCards from './Cards.jsx';

function Challenges() {
    return (
        <div>
            <Chacarousel />
            <br />
            <h1 style={{ textAlign: "center", color: "brown" }}>Your Tasks</h1>
            <br />
            <ChaCards />
            <br /><br />
            <h1 style={{ textAlign: "center", color: "brown" }}>Task Queries</h1>
            <AllCollapseExample />
        </div>
    )
}

export default Challenges;