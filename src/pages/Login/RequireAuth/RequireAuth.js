import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center d-flex flex-column justify-content-center align-items-center' style={{ height: '80vh' }}>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <div>
                <h5 className='text-success mt-3'> Please Verify your email address</h5>
                <button
                    className='btn btn-dark mt-2'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification Email Again
                </button>
            </div>
        </div>
    }
    return children;
};

export default RequireAuth;