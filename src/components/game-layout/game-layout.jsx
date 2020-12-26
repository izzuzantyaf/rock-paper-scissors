import React from 'react';
import Player from '../player/player'
import './game-layout.css'

class GameLayout extends React.Component {

    render() {
        return (
            <div className="game-layout">
                <Player player={this.props.players.player1} playerNumber="player1" />
                <Player player={this.props.players.player2} playerNumber="player2" />
            </div>
        )
    }
}

export default GameLayout