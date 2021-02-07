import React, { Component } from 'react'

import Bar from './Bar'

export default class EHP extends Component {
    public state = { hp: '', df: '', value: '' }

    public handleChangeFirst(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ hp: e.target.value })
        console.log(this.state.hp)
        this.change()
    }

    public handleChangeSecond(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ df: e.target.value })
        console.log(this.state.df)
        this.change()
    }

    public change() {
        const hp = +this.state.hp
        const df = +this.state.df
        this.setState({ value: hp * ((df / 100) + 1) })
    }

    render() {
        return (
            <div>
                <Bar />
                <div className="main">
                    <div className="calc">
                        <div className="float">
                            <input id="damage" placeholder="100" value={this.state.hp} onChange={this.handleChangeFirst.bind(this)}></input>
                            <hr/>
                            <p>HP</p>
                        </div>
                        <h1 className="float">+</h1>
                        <div className="float">
                            <input id="strength" placeholder="100" value={this.state.df} onChange={this.handleChangeSecond.bind(this)}></input>
                            <hr/>
                            <p>Defence</p>
                        </div>
                        <h1 className="float" role="button" onClick={this.change.bind(this)}>=</h1>
                        <div>
                            <input placeholder="100" value={this.state.value} disabled></input>
                            <hr/>
                            <p>EHP</p>
                        </div>
                    </div>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#2e3440" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,149.3C480,117,600,75,720,90.7C840,107,960,181,1080,213.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                        </path>
                    </svg>
                    <div className="formula">
                        <h1>Formula</h1>
                        <p>{"HP * { ( Def / 100 ) + 1 }"}</p>
                    </div>
                </div>
            </div>
        )
    }
}
