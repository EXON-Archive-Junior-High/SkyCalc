import React, { Component } from 'react'

import Bar from './Bar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Bar />
                <div className="main center">
                    <h1>Hypixel Skyblock Calc</h1>
                </div>
            </div>
        )
    }
}
