import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function FaqsCard() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.yBU3SrCUJpd9aB9LW2mQpgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" height={'270px'} width={'160px'}/>
        <Card.Body>
          <Card.Title>Michael</Card.Title>
          <Card.Text>
          is a television personality and personal trainer like Dave Rienzi. Apart from that, he is also an author releasing several books on diet and exercise including ‘The Super Carb Diet’ in 2017. The trainer appeared on the reality television show ‘The Biggest Loser’ and announced to host the show in 2015.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">+91 1234567899</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://artimg.gympik.com/articles/wp-content/uploads/2017/09/Kris-Gethin.jpg"  height={'270px'}/>
        <Card.Body>
          <Card.Title>Hammer</Card.Title>
          <Card.Text>
          is a television personality and personal trainer like Dave Rienzi. Apart from that, he is also an author releasing several books on diet and exercise including ‘The Super Carb Diet’ in 2017. The trainer appeared on the reality television show ‘The Biggest Loser’ and announced to host the show in 2015..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">+91 1234567897</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.HKqMyyMy_dD44CmHa-Xa6wAAAA?pid=ImgDet&w=199&h=243&c=7&dpr=1.3"  height={'270px'}/>
        <Card.Body>
          <Card.Title>Hardy</Card.Title>
          <Card.Text>
          is a television personality and personal trainer like Dave Rienzi. Apart from that, he is also an author releasing several books on diet and exercise including ‘The Super Carb Diet’ in 2017. The trainer appeared on the reality television show ‘The Biggest Loser’ and announced to host the show in 2015.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">+91 1234567898</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default FaqsCard;