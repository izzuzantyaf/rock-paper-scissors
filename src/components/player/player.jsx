import React from 'react'
import rock from '../images/fist.svg'
import paper from '../images/hold.svg'
import scissor from '../images/victory.svg'
import './player.css'

class Player extends React.Component {

    constructor(props) {
        super(props)
        // this.weapons = [rock, paper, scissor]
        this.attack = this.attack.bind(this)
        this.weapons = {
            rock: rock,
            paper: paper,
            scissor: scissor
        }
        this.state = {
            selectedWeapons: null
        }
    }

    attack() {
        // randomize weapons
        const weaponsKeys = Object.keys(this.weapons)
        const time = setInterval(() => {
            let selectedWeaponKey = weaponsKeys[Math.floor(Math.random() * weaponsKeys.length)]
            this.setState(state => ({
                selectedWeapons: this.weapons[selectedWeaponKey]
            }))
        }, 100);
        // remove attack button
        const attackBtn = document.querySelector(`.${this.props.playerNumber} button`)
        attackBtn.remove()
        // stop randomize weapons
        setTimeout(() => {
            clearInterval(time)
        }, 1000);
    }

    render() {
        return (
            <div className={`player ${this.props.playerNumber}`}>
                <div className="username">{this.props.player.username}</div>
                <div className="play-area">
                    <img src={this.state.selectedWeapons} alt="" />
                    <button onClick={this.attack}>
                        Attack
                    </button>
                </div>
            </div>
        )
    }
}

export default Player