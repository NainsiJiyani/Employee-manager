import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const AppBarStyles = styled.nav`
  box-shadow: 0 0 3px 1px grey;
  padding: 1rem;
  background: #e2dfdf;
  font-weight: bold;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: grey;
  }
`

const AppBar = () => {
    return (
        <AppBarStyles>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/register">REGISTER</Link></li>
            </ul>
        </AppBarStyles>

    );
}

export default AppBar;