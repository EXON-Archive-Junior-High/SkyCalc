/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import Bar from './Bar'
import blackLogo from '../img/black_logo.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Bar />
                <div className="main center">
                    <img src={blackLogo} height="200px"/>
                    <h1>Hypixel Skyblock Calc</h1>

                </div>
            </div>
        )
    }
}
