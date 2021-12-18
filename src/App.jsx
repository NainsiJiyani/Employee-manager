import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import DashBoardPage from './pages/DashBoardPage'
import AddEmployeePage from './pages/AddEmployeePage'
import EmployeeListPage from "./pages/EmployeeListPage";

function App() {
    const token = localStorage.getItem('AuthToken');

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"> <HomePage/></Route>
                    <Route path="/login"> <LoginPage/></Route>
                    <Route path="/register"> <RegisterPage/></Route>
                    <Route exact path="/dashboard" render={() => token ? <DashBoardPage /> :
                        <Redirect to={{ pathname: '/login' }} />} />
                    <Route exact path="/dashboard/add" render={() => token ? <AddEmployeePage /> :
                        <Redirect to={{ pathname: '/login' }} />} />
                    <Route exact path="/dashboard/list" render={() => token ? <EmployeeListPage /> :
                        <Redirect to={{ pathname: '/login' }} />} />
                    <Route path="*"><PageNotFound/></Route>
                </Switch>
            </Router>
        </>

    );
}

export default App;

 
