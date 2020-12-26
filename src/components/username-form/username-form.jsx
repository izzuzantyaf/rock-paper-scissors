import React from 'react'
import './username-form.css'

class UsernameForm extends React.Component {

    constructor(props) {
        super(props)
        this.setPlayerUsername = this.setPlayerUsername.bind(this)
    }

    setPlayerUsername() {
        const usernameInputField = Array.from(document.querySelectorAll('input.player'))
        const playerUsernameArr = usernameInputField.map(e => e.value)
        this.props.onUsernamePlayersChange(playerUsernameArr)
        document.querySelector('div.overlay').remove()
    }

    render() {
        return (
            <div className="overlay">
                <section className="username-form-box">
                    <div className="username-form">
                        <label htmlFor="player1">Player 1</label>
                        <input type="text" className="player" name="player1" id="player1" placeholder="Insert username" required />
                        <span className="versus">vs</span>
                        <label htmlFor="player2">Player 2</label>
                        <input type="text" className="player" name="player2" id="player2" placeholder="Insert username" required />
                    </div>
                    <button className="start" onClick={this.setPlayerUsername}>Let's go</button>
                </section>
            </div>
        )
    }
}

export default UsernameForm
