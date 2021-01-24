import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './css/App.css'

import Bar from './components/Bar'

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
