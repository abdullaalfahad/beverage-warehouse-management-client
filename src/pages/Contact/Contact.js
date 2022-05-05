import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className='py-5 bg-light'>
            <h1 className='text-center mb-4 text-dark'>Contact Us</h1>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="your message" required />
                </Form.Group>
                <input style={{ border: '1px solid #ced4da' }} className='w-100 p-2 btn btn-dark' type="button" value="Submit" />
            </Form>
        </div>
    );
};

export default Contact;