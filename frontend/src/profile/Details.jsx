import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;

    return (
        <div>
            <h1>My Profile</h1>
            <p>
                <strong>Name: </strong>{user.firstName} {user.lastName} <br />
                <strong>Username: </strong>{user.username} <br />
                <strong>Email: </strong> {user.email} <br/>
                <strong>Level: </strong> {user.level}
            </p>
            <p><Link className="btn btn-primary" to={`${path}/update`}>Update Profile</Link></p>
        </div>
    );
}

export { Details };