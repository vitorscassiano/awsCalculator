import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

export default props => (
    <Router history={hashHistory}>
        {/* <Route path='/todos' component={} />
        <Route path='/about' component={} /> */}
        <Redirect from='*' to='/todos' />
    </Router>
)
