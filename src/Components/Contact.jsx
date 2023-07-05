import React from 'react'
import {Link} from 'react-router-dom';
function Contact() {
  return (
    <div className='Contact'>
      <br/>
        <h2><u>EMAIL AND PHONE NUMBERS</u></h2>
    <p><b>&nbsp;EMAIL &nbsp;&nbsp;&nbsp; : &nbsp;UietPu@gmail.com</b></p>
    <p><b>&nbsp;MOBILE &nbsp;: &nbsp;1234567890</b></p>
    <h2><u>ADDRESS</u></h2>
    <p><b>&nbsp;UNIVERSITY &nbsp;INSTITUTE &nbsp;OF&nbsp; ENGINEERING&nbsp; AND &nbsp;TECHNOLOGY </b></p>
    <p><b>&nbsp;PANJAB &nbsp;UNIVERSITY &nbsp;(PUCHD)</b></p>
    <p><b>&nbsp;SECTOR &nbsp; : &nbsp;25, &nbsp;CHANDIGARH (160025)</b></p>
  
    <h2><u>OUR LOCATION</u></h2>
    <p>
      <iframe title='GoogleForm' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9437430010453!2d76.75492661420475!3d30.748081691945718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390febffe47a7419%3A0x267dc179dae933b6!2sUIET%20Punjab%20University!5e0!3m2!1sen!2sin!4v1658467392859!5m2!1sen!2sin' width={600} height={450} style={{border:"0"}} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </p>    
      <br /><br />
      <Link to="/home" id='homei'><button>Home</button></Link>     
    </div>
  )
}

export default Contact;