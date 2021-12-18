import SvgUserRemove from 'components/icons/UserRemove';
import React from 'react';
import styled from 'styled-components'

import Logo from './../components/icons/Logo'
import AppBar from "../components/appbar/AppBar";

const HomePageStyles = styled.header`
  text-align: center;
  margin: 6rem auto 0;

  svg {
    width: 80px;
  }

  h1 {
    font-size: 2.25rem;
  }

  p {
    color: #767484;
  }
`

const HomePage = (props) => {
    return (
        <>
            <AppBar/>
            <HomePageStyles>
                <Logo/>
                <h1>Employee Manager</h1>
            </HomePageStyles>
        </>
    );
}

export default HomePage;