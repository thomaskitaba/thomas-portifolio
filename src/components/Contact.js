import Chief from '../assets/img/chief.png';
import Chief2 from '../assets/img/chief-2.png';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';


export const Contact = () => {
const formInitialsDetail = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  message: ''
}

const [form, setForm] = useState(formInitialsDetail);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});
const [screenSize, setScreenSize] = useState(window.innerWidth);
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

// get the width of the screen
useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  }
}, [screenSize]);

// const onFormUpdate = (formField, value) => {
//   setForm({
//     ...formField,
//     [formField]: value
//   })
// }
const handelFormSubmit = async (e) => {
  e.preventDefault();
  setButtonText('Sending...');
  const formData = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        message: message
      };
  // alert(`${fname}, ${lname}, ${phone}, ${email}, ${message}`);
  let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });

  setButtonText('Send');
  setFname('');
  setLname('');
  setPhone('');
  setEmail('');
  setMessage('');

  setForm(formInitialsDetail);
  let result = await response.json();
  if (result.code === 200) {
    setStatus({success: true, message: 'Message sent successfully'});
  } else {
    setStatus({success: false, message: 'Something went wrong, please try again later.'});
  }
}

return (
  <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          {screenSize > 768 ? <img src={Chief} alt="Contact image Chief standing" /> : <img src={Chief2} alt="Contact image Chief standing" />}
        </Col>
        <Col>
          <h1>Let's Connect</h1>
          <form onSubmit={handelFormSubmit}>
            <Row>
              <Col className="px-1">
                <input type="text" placeholder="First Name" name="fname" value={fname} onChange={ (e) => setFname(e.target.value)} />
              </Col>
              <Col className="px-1">
                <input type="text" placeholder="Last Name" name="lname" value={lname} onChange={ (e) => setLname(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col className="px-1">
                <input type="email" placeholder="Email" name="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
                <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => setPhone(e.target.value)}/>
                <textarea placeholder="Message" name="messge" value={message} onChange={ (e) => setMessage(e.target.value)} />
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={4} className="px-1">
                <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {
                  status.message &&
                  <Col className="px-1">
                    <p className={status.success === true ? "sucess" : "danger"}></p>
                  </Col>
              }
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  </section>
)
}