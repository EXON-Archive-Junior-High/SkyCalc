import React, { Component } from 'react'
import Bar from './Bar'

export default class Damage extends Component {
    render() {
        return (
            <div>
                <Bar />
                <div className="main">
                    <input className="first"></input><input className="second"></input>
                    <br></br>
                    <hr className="first"/><hr className="second"/>
                    <p className="first">Strength</p><p className="second">Strength</p>
                </div>
                
                
            </div>
        )
    }
}
