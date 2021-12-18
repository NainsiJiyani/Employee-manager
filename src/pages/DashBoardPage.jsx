import React from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import Button from './../components/buttons/Button'

const DashboardPageStyles = styled.aside`
  width: 480px;
  margin: 2rem auto 0;

  button {
    width: 45%;
  }
  
  center button:hover {
    cursor: pointer;
    background: #de5426;
  }

  button:hover {
    background: #807d7d;
    cursor: pointer;
  }

  .button-container {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    color: #444040;
  }

`

const DashBoardPage = (props) => {
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('AuthToken');
        history.push('/');
    }

    const handleGoToPage = (path) => {
        history.push(`/dashboard${path}`);
    }

    return (
        <DashboardPageStyles>
            <center><Button label="Log out" uiStyle={'login'} onClick={() => handleLogout()}/></center>
            <h2>Welcome to Employee Dashboard</h2>
            <div className="button-container">
                <Button label="Add New Employee" onClick={() => {
                    handleGoToPage('/add');
                }}/>
                <Button label="View Employees List" onClick={() => {
                    handleGoToPage('/list');
                }}/>
            </div>
        </DashboardPageStyles>
    )
}

export default DashBoardPage;