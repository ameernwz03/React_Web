import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Products() {
  return (
    <>
    <div className="container mb-5 mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="text-center">
        <Button variant="outline-dark">Show More</Button>
      </div>
    </div>
    <div className="container d-flex justify-content-between">
    <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/483b626967a5423ebd8b55bec9beecd6_9366/juventus-24-25-home-authentic-jersey.jpg" />
      <Card.Body>
        <Card.Title>Juventus 24/25 Home Authentic Jersey</Card.Title>
        <Card.Text>
        Men's Soccer
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d06eb56089c54bf39aec38e21be58b1d_9366/juventus-24-25-away-jersey.jpg" />
      <Card.Body>
        <Card.Title>Juventus 24/25 Light Away Jersey</Card.Title>
        <Card.Text>
        Men's Soccer
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
      <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0997bcb961c04530b393749d88139b07_9366/Juventus_24-25_Home_Jersey_White_IT3551_HM1.jpg" />
      <Card.Body>
        <Card.Title>Juventus 24/25 Home Jersey</Card.Title>
        <Card.Text>
        Men's Soccer
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='mx-auto mb-5'>
      <Card.Img variant="top" src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbd287fba898471b93a8c97cabd56bfc_9366/juventus-originals-track-top.jpg" />
      <Card.Body>
        <Card.Title>Juventus Original Away Track Top</Card.Title>
        <Card.Text>
        Men's Soccer
        </Card.Text>
        <Button variant="primary">Shop Now</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Products;