import React, { Component } from 'react'
import './css/App.css'

import Bar from './components/Bar'
const { Route, BrowserRouter, Switch } = require('react-router-dom')

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/damage" component={Bar} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}
