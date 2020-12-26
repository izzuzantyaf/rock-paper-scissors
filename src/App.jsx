import React from 'react';
import './App.css';
import UsernameForm from './components/username-form/username-form'
import GameLayout from './components/game-layout/game-layout'
import ResultBox from './components/result-box/result-box'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleUsernamePlayersChange = this.handleUsernamePlayersChange.bind(this)
    this.state = {
      players: {
        player1: {
          username: null,
          win: false
        },
        player2: {
          username: null,
          win: false
        }
      }
    }
  }

  handleUsernamePlayersChange([usernamePlayer1, usernamePlayer2]) {
    this.setState({
      players: {
        player1: {
          username: usernamePlayer1
        },
        player2: {
          username: usernamePlayer2
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <ResultBox /> */}
        <UsernameForm onUsernamePlayersChange={this.handleUsernamePlayersChange} />
        <GameLayout players={this.state.players} />
      </div>
    );
  }
}

export default App;
