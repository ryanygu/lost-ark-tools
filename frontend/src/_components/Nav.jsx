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

    // landing
    if (!user && window.location.pathname === '/') {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-hero">
                    <div className="container-fluid">
                        <NavLink exact to="/" className="nav-item nav-link navbar-brand fw-bold">Lost Ark Tools</NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPublicCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarPublicCollapse">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a href="/forums" className="nav-item nav-link"><span className="nav-text">Forums</span></a>
                                <NavLink to="/leaderboards" className="nav-item nav-link"><span className="nav-text">Leaderboards</span></NavLink>
                                <a href="/#contact" className="nav-item nav-link"><span className="nav-text">Contact Us</span></a>
                            </div>
                            <div className="navbar-nav d-flex">
                                <NavLink to="/account/login" className="nav-item nav-link me-2"><span className="nav-text">Log in</span></NavLink>
                                <NavLink to="/account/register" className="nav-item nav-link me-2 register-button rounded-pill"><span className="nav-text">Register</span></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    // not logged in
    if (!user) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-white">
                    <div className="container-fluid">
                        <NavLink exact to="/" className="nav-item nav-link navbar-brand fw-bold"><span className="nav-text-dark-grey">Lost Ark Tools</span></NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPublicCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-solid fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarPublicCollapse">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a href="/forums" className="nav-item nav-link"><span className="nav-text-dark-grey">Forums</span></a>
                                <NavLink to="/leaderboards" className="nav-item nav-link"><span className="nav-text-dark-grey">Leaderboards</span></NavLink>
                                <a href="/#contact" className="nav-item nav-link"><span className="nav-text-dark-grey">Contact Us</span></a>
                            </div>
                            <div className="navbar-nav d-flex">
                                <NavLink to="/account/login" className="nav-item nav-link me-2"><span className="nav-text-dark-grey">Log in</span></NavLink>
                                <NavLink to="/account/register" className="nav-item nav-link me-2 register-button rounded-pill"><span className="nav-text">Register</span></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-white">
                <div className="container-fluid">
                    <NavLink exact to="/dashboard" className="nav-item nav-link navbar-brand fw-bold"><span className="nav-text-dark-grey">Lost Ark Tools</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrivateCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarPrivateCollapse">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink exact to="/dashboard" className="nav-item nav-link"><span className="nav-text-dark-grey">Dashboard</span></NavLink>
                            <NavLink to="/forums" className="nav-item nav-link"><span className="nav-text-dark-grey">Forums</span></NavLink>
                            <NavLink to="/faceting" className="nav-item nav-link"><span className="nav-text-dark-grey">Faceting</span></NavLink>
                            <NavLink to="/leaderboards" className="nav-item nav-link"><span className="nav-text-dark-grey">Leaderboards</span></NavLink>
                            {user.role === Role.Admin &&
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                            }
                        </div>
                        <div className="navbar-nav d-flex">
                            <NavLink to="/profile" className="nav-item nav-link">
                                <span className="nav-text-dark-grey">
                                    {/* <span className="fa-stack fa-sm">
                                        <i className="fa fa-circle fa-stack-2x text-secondary"></i>
                                        <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                                    </span> */}
                                    Profile
                                </span>
                            </NavLink>
                            <a onClick={accountService.logout} className="nav-item nav-link me-2"><span className="nav-text-dark-grey">Logout</span></a>
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