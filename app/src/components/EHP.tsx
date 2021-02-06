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
                    <div className="formula">
                        <h1>Formula</h1>
                        <p>{"HP * { ( Def / 100 ) + 1 }"}</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
