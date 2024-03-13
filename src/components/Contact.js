import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FiLoader } from "react-icons/fi";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log(result.text);
        setMessage('Your email has been sent!');
      }, (error) => {
        console.log(error.text);
        setMessage('There was an error sending your email.');
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000); 
      });
  };

  return (
    <div id="contact" className="contact-form">
      {loading ? (
        <div className="loading-container">
          <FiLoader className="loading-icon" />
          <div className="loading-text">Sending...</div>
        </div>
      ) : message ? (
        <div className="message">{message}</div>
      ) : (
        <div className='form'>
        <Form onSubmit={handleSubmit}>
          <h1 className='form-header'>Connect With Me!</h1>
          <p>I'm open to creative challenges, opportunities for professional growth, and mutual connections.   
          <br />
          <br />
          Let's have a conversation!</p>
          <hr />
          <Form.Group controlId="formBasicName">
            <Form.Control 
              type="text" 
              placeholder="Name" 
              name="name" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control 
              type="email" 
              placeholder="Email" 
              name="email" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicSubject">
            <Form.Control 
              type="text" 
              placeholder="Subject" 
              name="subject" 
              required 
            />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Enter your message" 
              name="message" 
              required 
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit"
          >
            Submit
          </Button>
        </Form>
        </div>
      )}
    </div>
  );
};

export default Contact;
