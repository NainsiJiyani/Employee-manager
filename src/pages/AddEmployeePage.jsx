import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import DashBoardPage from "./DashBoardPage";

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

import Firebase from 'firebase';

const AddEmployeePageStyles = styled.aside`
  width: 480px;
  margin: 2rem auto 0;

  header {
    margin-bottom: 10px;
    font-size: 20px;
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

const AddEmployeePage = (props) => {
    let data = [];

    useEffect(() => {
        Firebase.database().ref('/').on('value', snapshot => {
            data = snapshot.val();
        });
    })

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [isValidLogin, setIsValidLogin] = useState(true);
    const [errorMsg,setErrorMsg] = useState('');
    const [columns, setColumns] = useState([data]);

    const isDisabled = () => {
        const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !name || !email || !contact || !email.match(mail) || contact.toString().length !== 10;
    }

    const handleAddEmp = () => {
        const data = [...columns, {name, email, address, contact}];
        Firebase.database().ref('/').set(data).then(() => {
            console.log('DATA SAVED');
        }).catch((e) => {
            console.log('Error saving data', e);
        });
        getUserData();
    }

    const getUserData = () => {
        let ref = Firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            setColumns(state);
        });
    }

    return (
        <>
            <DashBoardPage/>
            <AddEmployeePageStyles>
                <header>Add Employee Data</header>
                <FormInput label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <FormInput label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormInput label="Address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <FormInput label="Contact Number" type="number" value={contact} onChange={(e) => setContact(e.target.value)}/>
                <div className="error">{!isValidLogin ? errorMsg : null}</div>
                <Button className="create-account" label="Add Employee Data" onClick={() => handleAddEmp()} disabled={isDisabled()}/>
            </AddEmployeePageStyles>
        </>
    )
}

export default AddEmployeePage;