import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Leaderboard } from './Leaderboard';

function Leaderboards({ match }) {
    const { path } = match;
    
    return (
        <div className="p-4">
            <div className="container" id="leaderboards">
                <Switch>
                    <Route exact path={path} component={Leaderboard} />
                </Switch>
            </div>
        </div>
    );
}

export { Leaderboards };