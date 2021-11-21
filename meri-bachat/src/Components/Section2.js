import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../App.css';

function Section2() {
    return (
        <>
        <div className="main-title2">
            <h1>Check out what's cool about us!</h1>
        </div>
        <div className="section2">
        <Card  className="card2" style={{ width: '18rem' , borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}>
  <Card.Img className="body2" variant="top" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
  <Card.Body >
    <Card.Title className="title2">Gift Card for 350+ Brands</Card.Title>
    <Card.Text className="text2">
      Gifting was never as easy and affordable as it is with MeriBachat GiftCards.
    </Card.Text>
    <Button style={{float: 'left', background:'#3B34AB' }} className="button2" >Buy Gift Card</Button>
  </Card.Body>
</Card>
<Card  className="card2" style={{ width: '18rem' , borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}>
  <Card.Img className="body2" variant="top" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
  <Card.Body>
    <Card.Title className="title2">Unbeatable Cashback</Card.Title>
    <Card.Text className="text2">
      Make the most of your shopping experience through unbelievable savings.
    </Card.Text>
    <Button style={{float: 'left', background:'#3B34AB' }} className="button2">Get Cashback</Button>
  </Card.Body>
</Card>
<Card  className="card2" style={{ width: '18rem' , borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}>
  <Card.Img className="body2" variant="top" src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lmdCUyMGNhcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
  <Card.Body>
    <Card.Title className="title2">Product Comparison</Card.Title>
    <Card.Text className="text2">
     Compare prices, features and more for your favourite products!
    </Card.Text>
    <Button style={{float: 'left' , background:'#3B34AB'}} className="button2">Compare Now</Button>
  </Card.Body>
</Card>
  </div>
  </>
    )
}

export default Section2;
