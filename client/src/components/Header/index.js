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
                <Link to="/">
                    <h1 class='navbar-brand'>Arizona Legal</h1>
                </Link>

                <nav className="text-center navbar navbar-expand{md}">
                    {Auth.loggedIn() ? (
                        <>
                        <Link to="/profile">Me</Link>
                        <a href="/" onClick={logout}>
                            Logout
                        </a>
                        </>
                    ) : (
                        <>
                        <Link to="/login" class="nav-link">Login</Link>
                        <Link to="/signup" class="nav-link">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;