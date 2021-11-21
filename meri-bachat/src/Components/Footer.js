import React , { Fragment } from 'react';
import { Container, Card} from 'react-bootstrap';
import {FaInstagramSquare, FaYoutube, FaFacebook, FaTelegramPlane} from 'react-icons/fa';
import '../App.css';

const Footer1 = () => {
  return (
    <Fragment>
    <Container fluid style={{ height: 400, background: '#3B34AB' }}>
     <div className="f">
     <div className="f1">
     <Card style={{ width: '10rem' , height: '3rem', marginTop: '35px', marginLeft: '35px', marginRight: '35px', marginBottom:'35px'}}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Text width={{marginTop: '15px'}} className="footer-text1">
      MeriBachat
    </Card.Text>   
  </Card.Body>
</Card>
<p className="footer-p">isse sasta aur <br/>kuch nhi</p>
<Card style={{ width: '19rem', height: '3rem', marginLeft: '35px' , marginRight:'35px', marginTop:'80px'}}>
  <Card.Body>  
    <Card.Text className="footer-text2">
      Follow us<FaYoutube style={{ marginLeft: '35px' ,fontSize: '30px', padding:'3px' }}/><FaFacebook style={{ fontSize: '30px', padding:'3px' }}/><FaInstagramSquare style={{ fontSize: '30px', padding:'3px' }}/><FaTelegramPlane style={{ fontSize: '30px', padding:'3px' }}/>
    </Card.Text>   
  </Card.Body>
</Card>
     </div>
     <div className="f2">
       <ul>
         <li>Home</li>
         <li>About us</li>
         <li>Contact us</li>
         <li>Privacy</li>
       </ul>
       <img style={{width:'200px', height:'35px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/768px-Google_Play_Store_badge_EN.svg.png"/>
     </div>
     <div className="f3">
     <ul>
         <li>Terms & Conditions</li>
         <li>Help & Support</li>
         <li>FaQ</li>
         <li>Blogs</li>
       </ul>
       <img style={{width:'200px', height:'35px'}} src="https://www.pikpng.com/pngl/m/144-1445686_app-store-available-on-apple-google-store-logo.png"/>
     </div>
     </div>
    </Container>   
    </Fragment>
  );
}
export default Footer1;