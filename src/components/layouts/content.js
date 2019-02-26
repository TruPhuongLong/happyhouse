import React, { Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Footer from './footer';

import routes from '../pages/router'

export default ({className}) => {
    const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    return (
        <div className={`${className}`} >
            <div style={{ minHeight: '100vh' }}>
                <Suspense fallback={loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/home" />
                    </Switch>
                </Suspense>
            </div>
            <Footer />

        </div>
    )
}