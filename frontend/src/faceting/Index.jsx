import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AbilityStones } from './AbilityStones';
import { Statistics } from './Statistics';

function Faceting ({ match }) {
    const { path } = match;
    
    return (
        <div className="p-4">
            <div className="container" id="faceting">
                <Switch>
                    <Route exact path={path} component={AbilityStones} />
                    <Route path={`${path}/statistics`} component={Statistics} />
                </Switch>
            </div>
        </div>
    );
}

export { Faceting };