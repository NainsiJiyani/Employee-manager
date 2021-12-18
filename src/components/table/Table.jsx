import React from 'react'
import styled from 'styled-components'

import {TablePagination} from 'react-pagination-table';

const TableStyles = styled.aside`
  .react-pagination-table .title,
  .react-pagination-table .sub-title{
    display: none;
  }
  
  .table {
    width: 100%;
    text-align: center;
    line-height: 2.5;
  }
  
  .table-header {
    background: #e8e6e6;
    color: #333232;
  }

  tbody tr {
    border-bottom: 1px solid #cac7c7;
  }

  .pagination-status {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
  .pagination-status__btn {
    padding: 5px 14px;
    cursor: pointer;
    border-radius: 10px;
    border: 0.5px solid gray;
  }
`

const Table = (props) => {

    return (
        <TableStyles>
            <TablePagination
                title="TablePagination"
                subTitle="Sub Title"
                headers={props.headers}
                data={props.data}
                // columns="name.age.size.phone.gender"
                columns={props.columns}
                perPageItemCount={5}
                totalCount={props.data.length}
                arrayOption={[["size", 'all', ' ']]}
            />
        </TableStyles>
    )
}

export default Table