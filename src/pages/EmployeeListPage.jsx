import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import DashBoardPage from "./DashBoardPage";

import Table from '../components/table/Table';

import Firebase from 'firebase';

const EmployeeListPageStyles = styled.aside`
  width: 75%;
  margin: 2rem auto 0;

  header {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #444040;
    text-align: center;
  }

`

const EmployeeListPage = (props) => {
    const [columns, setColumns] = useState([]);

    useEffect(
        () => {
            let ref = Firebase.database().ref('/');
            ref.on('value', snapshot => {
                const state = snapshot.val();
                setColumns(state);
            });
        }
    )


    const headers = ["Name", "Email", "Address", "Phone"];
    const data = columns.length ? columns : [
        {address: 1234567, name: "Bump", email: 'Bump@mail.com', phone: '5689774584'},
        {address: 1234567, name: "Judy", email: 'Judy@mail.com', phone: '5689774584'},
        {address: 1234567, name: "Ryan", email: 'Ryan@mail.com', phone: '5689774584'},
        {address: 1234567, name: "Flow", email: 'Flow@mail.com', phone: '5689774584'},
        {address: 1234567, name: "Ray", email: 'Ray@mail.com', phone: '5689774584'},
        {address: 1234567, name: "Yen", email: 'Yen@mail.com', phone: '5689774584'},
    ]
    const columnsOrder = 'name.email.address.phone';
    return <>
        <DashBoardPage/>
        <EmployeeListPageStyles>
            <Table
                headers={headers}
                data={data}
                columns={columnsOrder}
            />
        </EmployeeListPageStyles></>
}

export default EmployeeListPage;