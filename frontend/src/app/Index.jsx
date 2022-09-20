import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert, Footer } from '@/_components';
import { Home } from '@/home';
import { Profile } from '@/profile';
import { Admin } from '@/admin';
import { Account } from '@/account';
import { Faceting } from '@/faceting';
import { Leaderboards } from '@/leaderboards';
import { Landing } from '@/landing';
import { Forums } from '@/forums';

function App() {
    const { pathname } = useLocation();  
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // The first <Redirect .../> automatically removes trailing slashes from URLs which can cause issues
    // and are a side-effect from using relative react router links (i.e. <Link to="." />)
    return (
        <div className={'app-container'}>
            <Nav />
            <Alert />
            <Switch>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path="/" component={Landing} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/faceting" component={Faceting} />
                <Route path="/leaderboards" component={Leaderboards} />
                <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
                <PrivateRoute path="/dashboard" component={Home} />
                <Route path="/account" component={Account} />
                <Route path="/forums" component={Forums} />
                <Redirect from="*" to="/" />
            </Switch>
            <Footer />
        </div>
    );
}

export { App }; 