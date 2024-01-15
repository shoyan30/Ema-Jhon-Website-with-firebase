import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const logoutHandle = () => {
        logOut()
            .then(result => { console.log(result.user) })
            .catch(error => { console.log(error) })
    }
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                {
                   user && <button className='logOut' onClick={logoutHandle}>Sign Out</button>
                }
                </div>
            </nav>
            {
                user && <span>Welcome {user.email}</span>
            }
        </div>
    );
};

export default Header;