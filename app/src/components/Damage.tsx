import React, { Component } from 'react'
import Bar from './Bar'

export default class Damage extends Component {
    public state = { damage: '', strength: '', value: '' }

    public handleChangeFirst(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ damage: e.target.value })
    }

    public handleChangeSecond(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ strength: e.target.value })
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
                    <div className="calc">
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
                        <h1 className="float" role="button" onClick={this.change.bind(this)}>=</h1>
                        <div>
                            <input placeholder="100" value={this.state.value} disabled></input>
                            <hr/>
                            <p>Real Damage</p>
                        </div>
                    </div>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#2e3440" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,149.3C480,117,600,75,720,90.7C840,107,960,181,1080,213.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                        </path>
                    </svg>
                    <div className="formula">
                        <h1>Formula</h1>
                        <p>d</p>
                    </div>
                </div>
            </div>
        )
    }
}
