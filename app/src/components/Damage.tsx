import React, { Component } from 'react'
import Bar from './Bar'

export default class Damage extends Component {
    public state = { damage: '', strength: '', value: '' }
    public second: React.RefObject<any>

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.second = React.createRef()
    }

    public handleChangeFirst(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ damage: e.target.value })
    }

    public handleChangeSecond(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ strength: e.target.value })
    }

    public handleKeyPressFirst(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.second.current.focus()
        }
    }

    public handleKeyPressSecond(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.change()
        }
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
                        <h2 className="title">Damage</h2>
                        <div className="float">
                            <input id="damage" placeholder="100" value={this.state.damage} onChange={this.handleChangeFirst.bind(this)} onKeyPress={this.handleKeyPressFirst.bind(this)}></input>
                            <hr/>
                            <p>Damage</p>
                            <br />
                        </div>
                        <h1 className="float">+</h1>
                        <div className="float">
                            <input id="strength" placeholder="100" value={this.state.strength} ref={this.second} onChange={this.handleChangeSecond.bind(this)} onKeyPress={this.handleKeyPressSecond.bind(this)}></input>
                            <hr/>
                            <p>Strength</p>
                            <br />
                        </div>
                        <h1 className="float" role="button" onClick={this.change.bind(this)}>=</h1>
                        <div>
                            <input placeholder="100" value={this.state.value} disabled></input>
                            <hr/>
                            <p>Real Damage</p>
                            <br />
                        </div>
                    </div>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2e3440" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,149.3C480,117,600,75,720,90.7C840,107,960,181,1080,213.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    <div className="formula">
                        <h1>Formula</h1>
                        <p>d</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2e3440" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,245.3C640,256,800,256,960,256C1120,256,1280,256,1360,256L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            </div>
        )
    }
}
