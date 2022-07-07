import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from "styled-components";

export default class Navbar extends React.Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5" >  
             <ul className="navbar-nav align-items-center">
              <li className="nav-item  ml-5">
                  <Link to="/" className="nav-link">products</Link>
              </li>
             </ul>
             <Link to="/cart" className="ml-auto">
             <ButtonContainer>
              <i className="fas fa-cart-plus"/>my cart
             </ButtonContainer>
             </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav
`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important ;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`