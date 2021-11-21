import React from 'react';
import {Nav, Button, Card, Container} from 'react-bootstrap';

function Section6() {
    return (
        <>
        <div className="Section6-A">
          <h1 className="title6">How MeriBacahat Works</h1>  
          <Nav defaultActiveKey="/home" className="nav6" as="ul">
  <Nav.Item as="li">
    <Nav.Link className="linkA" href="/home">Gift Cards</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link className="link" eventKey="link-1">Product Comparison</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link className="link" eventKey="link-2">Cashback</Nav.Link>
  </Nav.Item>
</Nav>
<Button className="btn6" ><Button className="btn6A" >Online</Button><Button style={{borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}className="btn6B" >Offline</Button></Button>
        </div>
        <Container className="Section6">
        <h2 className="h6-bottom">Steps for how MB Works for Gift Cards</h2>
        <div className="Section6-card">
        <Card style={{ width: '13rem' }}>
  
  <Card.Body>
    <Card.Title>01</Card.Title>
    <Card.Text>
      Buy Gift card from us
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '13rem' }}>
  
  <Card.Body>
    <Card.Title>02</Card.Title>
    <Card.Text>
      Get Gift card to via your mail
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '13rem' }}>
  
  <Card.Body>
    <Card.Title>03</Card.Title>
    <Card.Text>
     Select a product & proceed to pay
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '13rem' }}>
  
  <Card.Body>
    <Card.Title>04</Card.Title>
    <Card.Text>
     Redeem coupon in gift card section
    </Card.Text>
    
  </Card.Body>
</Card>

</div>
<Button className="btn6-bottom">Buy Now</Button>
</Container>

        
        
        </>
    )
}

export default Section6
