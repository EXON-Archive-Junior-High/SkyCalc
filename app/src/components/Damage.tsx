import React, { Component } from 'react'
import Bar from './Bar'

export default class Damage extends Component {
    render() {
        return (
            <div>
                <Bar />
                <div className="main">
                    <div className="float">
                        <input></input>
                        <hr/>
                        <p>Damage</p>
                    </div>
                    <h1 className="float">+</h1>
                    <div className="float">
                        <input></input>
                        <hr/>
                        <p>Strength</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
