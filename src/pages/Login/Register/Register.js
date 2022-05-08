import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement;

    if (user) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSignUp = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        event.target.reset();
    }

    return (
        <div className='py-5 w-50 mx-auto'>
            <h1 className='mb-3 text-center'>Register Here</h1>
            <Form onSubmit={handleSignUp} className=''>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <input style={{ border: '1px solid #ced4da', width: '25%' }} className='p-2 btn btn-dark' type="submit" value="Register" />
            </Form>
            <p className='my-3'>Already have an account? <Link to='/login'>Please login</Link></p>
            <div className=''>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;