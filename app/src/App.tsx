import React, { Component } from 'react'
import './css/App.css'

import Home from './components/Home'
import Damage from './components/Damage'
import EHP from './components/EHP'

const { Route, BrowserRouter, Switch } = require('react-router-dom')

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/damage" component={Damage} />
                <Route path="/ehp" component={EHP} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}
