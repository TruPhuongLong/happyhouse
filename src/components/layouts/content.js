import React, { Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer';

import routes from '../pages/router'

export default ({ className , id}) => {
    const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    return (
        <div className={`${className}`} id={id} >
            <div style={{ minHeight: 'calc(100vh - 40px)' }}>
                <Navbar id="navbar"/>
                <div style={{ padding: '20px'}} id="main">
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
            </div>
            <Footer />

        </div>
    )
}