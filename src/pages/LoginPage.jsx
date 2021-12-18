import React, {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import firebaseApp from './../firebase/firebaseConfig'
import AppBar from '../components/appbar/AppBar';


const LoginPageStyles = styled.aside`

  max-width: 380px;
  margin: 4rem auto 0;

  header {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #444040;
    text-align: center;
  }

  button:hover {
    background: #807d7d;
  }

  .error {
    font-size: 14px;
    text-align: center;
    color: red;
    margin-bottom: 10px;
  }

`

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidLogin, setIsValidLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const history = useHistory();

    const handleClick = () => {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                // email and password input
                if (userCredential.user && userCredential.user.refreshToken) {
                    localStorage.setItem('AuthToken', userCredential.user.refreshToken);
                    history.push('/dashboard');
                }
            })
            .catch(error => {
                setIsValidLogin(false);
                setErrorMsg(error.message);
                console.log(error);
            })
    }

    const isDisabled = () => {
        const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !email || !password || !email.match(mail);
    }

    return (
        <>
            <AppBar/>
            <LoginPageStyles>
                <header>Login Page</header>
                <FormInput type="text" label="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormInput type="password" label="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                <div className="error">{!isValidLogin ? errorMsg : null}</div>
                <Button label="login" onClick={handleClick} disabled={isDisabled()}/>
            </LoginPageStyles></>
    );
}

export default LoginPage;

 



 



 