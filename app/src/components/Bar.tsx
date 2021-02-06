import React, { Component } from 'react'
import logo from '../img/logo.png'

export default class Bar extends Component {
    render() {
        return (
            <div>
                <div className="bar">
                    <div className="content">
                        <a href="/"><img src={logo} height="40px"/></a>
                        <a href="/damage">Damage</a>
                        <a href="/ehp">EHP</a>
                    </div>
                </div>
            </div>
        )
    }
}
