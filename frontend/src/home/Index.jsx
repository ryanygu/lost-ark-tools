import React from 'react';
import { Link } from 'react-router-dom';


import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container" id="dashboard">
                <h1>Hi {user.firstName}!</h1>
                <p>Welcome to Lost Ark Tools.</p>
                <p><Link className="btn btn-primary" to={`/faceting`}>Click here to here started</Link></p>
                <p style={{ marginTop: '50px' }}>Note: this Dashboard page is a work in progress.</p>
            </div>
        </div>
    );
}

export { Home };