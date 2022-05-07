import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const contact = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        }
        fetch('http://localhost:5000/contact', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.insertedId) {
                    toast('success');
                    event.target.reset();
                }
            })
    }
    return (
        <div id='contact' className='py-5 bg-light'>
            <h1 className='text-center mb-4 text-dark'>Contact Us</h1>
            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name='message' rows={5} placeholder="your message" required />
                </Form.Group>
                <input style={{ border: '1px solid #ced4da' }} className='w-100 p-2 btn btn-dark' type="submit" value="Submit" />
            </Form>
        </div>
    );
};

export default Contact;