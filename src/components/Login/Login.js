import React, { useContext } from 'react';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn } from './ManageLogin';
import GoogleButton from 'react-google-button'



const Login = () => {
    initializeLoginFramework();


    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then( res => {
                setLoggedInUser( res );
                true && history.replace( from );
            } )
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: '300px' }}>
            <GoogleButton
                onClick={googleSignIn}
            />



        </div>
    );
};

export default Login;
