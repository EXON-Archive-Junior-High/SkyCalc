import React, { Component } from 'react'
import Bar from './Bar'

export default class Damage extends Component {
    public state = { damage: '', strength: '' }

    public handleChangeFirst(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ damage: e.target.value })
        this.change()
    }

    public handleChangeSecond(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ strength: e.target.value })
        this.change()
    }

    public change() {
        const damage = +this.state.damage
        const strength = +this.state.strength
        console.log(damage + strength)
    }

    render() {
        return (
            <div>
                <Bar />
                <div className="main">
                    <div className="float">
                        <input id="damage" placeholder="100" value={this.state.damage} onChange={this.handleChangeFirst.bind(this)}></input>
                        <hr/>
                        <p>Damage</p>
                    </div>
                    <h1 className="float">+</h1>
                    <div className="float">
                        <input id="strength" placeholder="100" value={this.state.strength} onChange={this.handleChangeSecond.bind(this)}></input>
                        <hr/>
                        <p>Strength</p>
                    </div>
                    <h1 className="float">=</h1>
                    <div className="float">
                        <input placeholder="100" disabled></input>
                        <hr/>
                        <p>Real Damage</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
