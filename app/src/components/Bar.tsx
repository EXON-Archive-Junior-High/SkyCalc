import React, { Component } from 'react'

export default class Bar extends Component {
    render() {
        return (
            <div>
                <div className="bar">
                    <div className="content">
                        <a href="/">SkyBlock Calculator</a>
                        <a href="/damage">Damage</a>
                        <a href="/ehp">EHP</a>
                    </div>
                </div>
            </div>
        )
    }
}
