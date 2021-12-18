import React, {useState} from 'react';
import styled from 'styled-components'

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'
import {useHistory} from "react-router-dom";
import firebaseApp from './../firebase/firebaseConfig'
import AppBar from '../components/appbar/AppBar'


const RegisterPageStyles = styled.aside`
  width: 480px;
  margin: 2rem auto 0;

  header {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #444040;
    text-align: center;
  }

  .create-account {
    margin-top: 2rem;
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

const RegisterPage = (props) => {
    console.log(firebaseApp);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidLogin, setIsValidLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const history = useHistory();

    const handleCreateAcc = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if (userCredential.additionalUserInfo.isNewUser && userCredential.user) {
                    history.push('/login')
                }
            })
            .catch((error) => {
                console.log(error)
                setIsValidLogin(false);
                setErrorMsg(error.message);
            });
    }

    const isDisabled = () => {
        const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !name || !email || !password || !email.match(mail);
    }

    return (
        <>
            <AppBar/>
            <RegisterPageStyles>
                <header>Sign Up</header>
                <FormInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <FormInput label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormInput label="password (min 6 characters)" type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                <div className="error">{!isValidLogin ? errorMsg : null}</div>
                <Button className="create-account" label="Create Account" onClick={() => handleCreateAcc()}
                        disabled={isDisabled()}/>
            </RegisterPageStyles>
        </>
    );
}

export default RegisterPage;