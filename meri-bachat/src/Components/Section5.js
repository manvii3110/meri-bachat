import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';


function Section5() {
    return (
        <>
        <div>
            <h1 className="main-text5">What do we offer</h1>
        </div>
        <div className="Section5-card">
        <Card className="card5" style={{ width: '15rem' ,borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}>
  <Card.Img style={{ width:'150px', height:'150px',  padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">India's Largest pre-shopping destination</Card.Title>
  </Card.Body>
</Card>
<Card className="card5" style={{ width: '15rem' ,borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0'}}>
  <Card.Img style={{ width:'150px', height:'150px',  padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">Gift cards for 300+ brands</Card.Title>
  </Card.Body>
</Card>
<Card className="card5" style={{ width: '15rem',borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0' }}>
  <Card.Img style={{ width:'150px', height:'150px',  padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">Product Comparison</Card.Title>
  </Card.Body>
</Card>
<Card className="card5" style={{ width: '15rem',borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0' }}>
  <Card.Img style={{ width:'150px', height:'150px',  padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">Discounts throughout 365 days</Card.Title>
  </Card.Body>
</Card>
<Card className="card5" style={{ width: '15rem',borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0' }}>
  <Card.Img style={{ width:'150px', height:'150px',  padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">Brand Discount + MeriBachatdiscount + Super Savings</Card.Title>
  </Card.Body>
</Card>
<Card className="card5" style={{ width: '15rem', borderTop:'0', borderBottom:'0', borderLeft:'0', borderRight:'0' }}>
  <Card.Img style={{ width:'150px', height:'150px', padding: '10px'}} variant="top" src="http://www.devinfosystem.com/assets/product/What-We-Offer.png" />
  <Card.Body>
    <Card.Title className="title5">Unbeatable cashbacks</Card.Title>
  </Card.Body>
</Card>

        </div>
        </>
    )
}

export default Section5
