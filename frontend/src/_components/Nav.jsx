import React, { useState, useEffect } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // not logged in
    if (!user) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink exact to="/" className="nav-item nav-link navbar-brand">Lost Ark Tools</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPublicCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarPublicCollapse">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a href="/#features" className="nav-item nav-link">Features</a>
                                <NavLink to="/leaderboards" className="nav-item nav-link">Leaderboards</NavLink>
                                <a href="/#contact" className="nav-item nav-link">Contact Us</a>
                            </div>
                            <div className="navbar-nav d-flex">
                                <NavLink to="/account/login" className="nav-item nav-link me-2">Log in</NavLink>
                                <NavLink to="/account/register" className="nav-item nav-link me-2">Register</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink exact to="/dashboard" className="nav-item nav-link navbar-brand">Lost Ark Tools</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrivateCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarPrivateCollapse">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink exact to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
                            <NavLink to="/profile" className="nav-item nav-link">Profile</NavLink>
                            <NavLink to="/faceting" className="nav-item nav-link">Faceting</NavLink>
                            <NavLink to="/leaderboards" className="nav-item nav-link">Leaderboards</NavLink>
                            {user.role === Role.Admin &&
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                            }
                        </div>
                        <div className="navbar-nav d-flex">
                            <a onClick={accountService.logout} className="nav-item nav-link me-2">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            <Route path="/admin" component={AdminNav} />
        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav }; 