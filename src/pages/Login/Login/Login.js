import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (token) {
        // navigate(from, { replace: true });
    }

    const handleLoginIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();
        navigate(from, { replace: true });
    }

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='py-5 login'>
            <h1 className='mb-3 text-center'>Please Login</h1>
            <Form onSubmit={handleLoginIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} name='password' placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <input style={{ border: '1px solid #ced4da', width: '25%' }} className='p-2 btn btn-dark' type="submit" value="Login" />
            </Form>
            <div className='others'>
                <div className='w-50 mx-auto'>
                    <p className='my-3'>New in Beverage? <Link to='/register'>Create a account</Link></p>
                    <p className='my-3'>Forget Password? <Button className='reset-btn' variant="link" onClick={resetPassword}>Reset password</Button></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;