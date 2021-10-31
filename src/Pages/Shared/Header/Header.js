import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="heading">
            <div className="header">
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {
                        user.email ?
                            <div>
                                <NavLink to="/myOrders" className="btn">My Orders</NavLink>
                                <NavLink to="/manageOrders" className="btn">Manage Orders</NavLink>
                                <NavLink to="/addService" className="btn">Add A New Package</NavLink>
                                {user.email && <span className="">Bye {user.displayName}</span>}
                                <NavLink to="/" onClick={logOut} className="btn btn-dark">Logout</NavLink>
                            </div> :
                            <NavLink to="/login">Login</NavLink>
                    }

                </nav>
            </div>
            <div className="banner">
                {user.email && <span className="userName">Hi! {user.displayName}</span>}
                <h2 className="header-name p-4">NIRAPOD TRAVELS <br />FOR YOU</h2>
            </div>
        </div>
    );
};

export default Header;