import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../Home/Home';
import { useHistory, useLocation } from 'react-router';

const initializeLoginFramework = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleLogIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var user = result.user;
                // console.log(user);
                handleResponse(user)
            }).catch((error) => {

                // var errorCode = error.code;
                // var errorMessage = error.message;


            });
    }

    const handleResponse = (res) => {
        setLoggedInUser(res);
        history.replace(from);
    }

    return (
        <div className="my-5">
            <button className="btn btn-primary" onClick={handleLogIn}>Login with Gmail</button>
        </div>
    );
};

export default Login;