import React from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p75fuay', 'template_jb1dkun', e.target, '236Qqd5xx77CA1dKy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Control type="text" placeholder="Name" name="name" required />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" name="email" required />
      </Form.Group>

      <Form.Group controlId="formBasicSubject">
        <Form.Control type="text" placeholder="Subject" name="subject" required />
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Control as="textarea" rows={4} placeholder="Enter your message" name="message" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
