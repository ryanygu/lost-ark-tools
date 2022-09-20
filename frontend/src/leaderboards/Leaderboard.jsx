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
            <h3 className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Egestas fringilla phasellus faucibus scelerisque eleifend.</h3>

            <table className="table mt-5">
                <thead className="">
                    <tr>
                        <th style={{ width: '10%' }}>#</th>
                        <th style={{ width: '40%' }}>Username</th>
                        <th style={{ width: '20%' }}>Total Faceting Score</th>
                        <th style={{ width: '20%' }}>Max Faceting Score</th>
                        <th style={{ width: '10%' }}>Attempts</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, i) =>
                        <tr key={user.id}>
                            <td>{i}</td>
                            <td>{user.username}</td>
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
            <h3 className="mt-5"><span className="highlight">Coming soon:</span> sort by columns, pagination</h3>
        </div>
    );
}

export { Leaderboard };