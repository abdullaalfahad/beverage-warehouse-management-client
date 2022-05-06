import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    const handleLoginIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        event.target.reset();
    }
    return (
        <div className='container py-5 all-section'>
            <h1 className='mb-3 text-center'>Login</h1>
            <Form onSubmit={handleLoginIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input style={{ border: '1px solid #ced4da', width: '25%' }} className='p-2 btn btn-dark' type="submit" value="Login" />
            </Form>
            <div className='w-50 mx-auto'>
                <hr className='my-4' />
                <div className='text-center'>
                    <button className='w-50 p-2 btn btn-dark'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;