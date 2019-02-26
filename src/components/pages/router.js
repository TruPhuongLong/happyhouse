import React from 'react'

const Home = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./about'));
const Business = React.lazy(() => import('./business'));
const Contact = React.lazy(() => import('./contact'));

export default [
    {path: '/home', exact: true, component: Home},
    {path: '/about', exact: true, component: About},
    {path: '/business', exact: true, component: Business},
    {path: '/contact', exact: true, component: Contact},
]