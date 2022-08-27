import React, { useState, useEffect } from 'react';

import { accountService } from '@/_services';

function Leaderboard({ match }) {
    const { path } = match;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        accountService.getAll().then(x => setUsers(x));
    }, []);

    const getTotalScore = (faceting) => {
        let total = 0
        for (let i = 0; i < faceting.length; i++) {
            total += faceting[i].score
        }
        return total
    }

    const getMaxScore = (faceting) => {
        let max = 0
        for (let i = 0; i < faceting.length; i++) {
            if (faceting[i].score > max) {
                max = faceting[i].score
            }
        }
        return max
    }

    return (
        <div>
            <h1>Leaderboards</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '25%' }}>Name</th>
                        <th style={{ width: '25%' }}>Email</th>
                        <th style={{ width: '20%' }}>Total Faceting Score</th>
                        <th style={{ width: '20%' }}>Max Faceting Score</th>
                        <th style={{ width: '10%' }}>Attempts</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.title} {user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{getTotalScore(user.faceting)}</td>
                            <td>{getMaxScore(user.faceting)}</td>
                            <td>{user.faceting.length}</td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            <p> Next feature: sort by columns</p>
        </div>
    );
}

export { Leaderboard };