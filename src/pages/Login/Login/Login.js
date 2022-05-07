import React from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }

    const handleLoginIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }

    return (
        <div className='py-5 w-50 mx-auto'>
            <h1 className='mb-3 text-center'>Please Login</h1>
            <Form onSubmit={handleLoginIn} className=''>
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
            <p className='my-3'>New in Beverage? <Link to='/register'>Create a account</Link></p>
            <div className=''>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;