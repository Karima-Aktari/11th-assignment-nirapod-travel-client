import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || './home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setIsLoading(false)
            })
    }

    return (
        <div>
            <h1>Please Sign In</h1>
            <h1>By Your Google Account</h1>
            <h3>{user.displayName}</h3>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;