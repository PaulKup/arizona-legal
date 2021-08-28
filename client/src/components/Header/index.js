import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
      event.preventDefault();
      Auth.logout();
    };

    return (
        <header>
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link to="/">
                        <h1 className='navbar-brand'>Arizona Legal</h1>
                    </Link>
                    <div className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                            <Link to="/WhoAreWe" className="dropdown-item">Who Are We</Link>
                            </li>
                            <li>
                            <Link to="/WhoDoWeServe" className="dropdown-item">Who Do We Serve</Link>
                            </li>
                            <li>
                            <Link to="/HowWeCanHelp" className="dropdown-item">How We Can Help</Link>
                            </li>
                        </ul>
                    </div>
                        
                    
                    {Auth.loggedIn() ? (
                        <>
                        <Link to="/profile">Me</Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                        </>
                    ) : (
                        <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/signup" className="nav-link">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;