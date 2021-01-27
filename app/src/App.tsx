import React, { Component } from 'react'
import './css/App.css'

import Bar from './components/Bar'
import Damage from './components/Damage'
import EHP from './components/EHP'

const { Route, BrowserRouter, Switch } = require('react-router-dom')

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Bar} />
                    <Route path="/damage" component={Damage} />
                    <Route path="/ehp" component={EHP} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}
