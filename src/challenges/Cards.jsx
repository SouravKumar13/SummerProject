import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ChaCards() {
    return (
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.W0fzJJY9vjxGYqMMYHaNtwHaDt?pid=ImgDet&w=190.00000000000003&h=95.00000000000001&c=7&dpr=1.3" height={'250px'}  />
          <Card.Body>
            <Card.Title>Group Tasks</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://1.bp.blogspot.com/-hL4caT9VKJo/XV-msQsNxCI/AAAAAAAABHc/KuCn3O-D7FEUKc47ApNPdrsAZ0cItA2iACLcBGAs/w1200-h630-p-k-no-nu/benefits-of-circuit-training-side-plank.jpg" height={'250px'}  />
          <Card.Body>
            <Card.Title>Strength Tasks</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://blog.zogics.com/hs-fs/hubfs/Zogics_Blog_5_reasons_March_2017.jpg?width=1698&height=670&name=Zogics_Blog_5_reasons_March_2017.jpg"  height={'250px'} />
          <Card.Body>
            <Card.Title>Cardio Tasks</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
  
  export default ChaCards;