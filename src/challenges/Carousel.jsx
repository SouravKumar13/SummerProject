import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

function Chacarousel() {

    return (
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.W0fzJJY9vjxGYqMMYHaNtwHaDt?pid=ImgDet&w=190.00000000000003&h=95.00000000000001&c=7&dpr=1.3" height={'400px'} width={'200px'}
             alt="First slide" 
          />
          <Carousel.Caption>
            <h3>Strength</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1.bp.blogspot.com/-hL4caT9VKJo/XV-msQsNxCI/AAAAAAAABHc/KuCn3O-D7FEUKc47ApNPdrsAZ0cItA2iACLcBGAs/w1200-h630-p-k-no-nu/benefits-of-circuit-training-side-plank.jpg"
            height={'400px'} width={'200px'}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Spirit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.zogics.com/hs-fs/hubfs/Zogics_Blog_5_reasons_March_2017.jpg?width=1698&height=670&name=Zogics_Blog_5_reasons_March_2017.jpg"
            height={'400px'} width={'200px'}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Discipline</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
      </div>
    )
  }
  
  export default Chacarousel;