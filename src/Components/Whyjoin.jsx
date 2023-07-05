import React from 'react'
import { Link } from 'react-router-dom';
import fitness from './img/fitness consultaion.jpg'
import team from './img/teamworkout.jpg'
import oneOnone from './img/one-on-one.jpg'


function Whyjoin() {
  return (
    <div className='Aboutus'>
     <br /><br />
     <div><h1 align="center">why join us</h1>
    <br/><br/>
    <div className="posi_tion">
    <img src={fitness} alt="error" className='img lagoo' width={200}/>
        <h2>Fitness Consultaion</h2>
        <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam fugit assumenda vitae
            eaque?
            Laudantium eveniet placeat culpa nemo dolorum voluptates ipsum officiis quasi eius non rerum maiores
            asperiores similique omnis ad, illo quaerat ipsam minus id saepe ex iusto aut quas. Unde error incidunt
            distinctio eum repellendus quae aspernatur eius soluta reprehenderit qui sequi id aperiam quaerat nisi,
            adipisci voluptate doloribus, mollitia optio odio. Doloremque nostrum rerum veritatis repudiandae
            accusantium consequuntur quod quisquam sed ab. A libero harum, sed fugit corrupti quia facere numquam
            impedit. Beatae itaque ullam corrupti et! Aliquid vero optio quidem ullam est id, saepe quibusdam!</p>
    </div>
    <br/>
    <div className="posi_tion1">
        <img src={team} alt="error" className='img lagoo' width={200}/>
        <h2>Team WorkOut</h2>
        <p id="para2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reprehenderit eum possimus
            ducimus!
            Amet modi quis distinctio tempore ratione sunt dolorem id earum nihil debitis asperiores, voluptatem
            aperiam, magnam nam eligendi dignissimos blanditiis commodi officia. Nisi iusto exercitationem excepturi!
            Illum vero, praesentium delectus quo id saepe provident obcaecati perferendis animi sed pariatur atque nisi
            iure corporis quibusdam deleniti, aliquid soluta. Quam corrupti odio a fugiat id rem hic voluptas aliquid.
            Temporibus sint, tenetur nihil expedita non saepe earum aspernatur incidunt.</p>
    </div>
    <br/><br/>
    <div className="posi_tion2">
    <img src={oneOnone} alt="error" className='img lagoo' width={200}/>
        <h2>One On One</h2>
        <p id="para3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus reprehenderit eum possimus
            ducimus!
            Amet modi quis distinctio tempore ratione sunt dolorem id earum nihil debitis asperiores, voluptatem
            aperiam, magnam nam eligendi dignissimos blanditiis commodi officia. Nisi iusto exercitationem excepturi!
            Illum vero, praesentium delectus quo id saepe provident obcaecati perferendis animi sed pariatur atque nisi
            iure corporis quibusdam deleniti, aliquid soluta. Quam corrupti odio a fugiat id rem hic voluptas aliquid.
            Temporibus sint, tenetur nihil expedita non saepe earum aspernatur incidunt.</p>
    </div></div>
     <br/>  <br/>

      <Link to="/home" id='homei'><button>Home</button></Link>     
    </div>
  )
}

export default Whyjoin;