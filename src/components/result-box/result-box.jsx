import React from 'react'
import './result-box.css'

class ResultBox extends React.Component {
    render() {
        return (
            <div className="overlay">
                <div className="result-box">
                    <div className="messages">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, rerum! Necessitatibus reprehenderit animi vitae veniam deserunt iusto quo sed, sunt porro, id consequuntur assumenda eius ad non inventore facere? Corrupti?
                    </div>
                    <div className="choices">
                        <button className="rematch">Rematch</button>
                        <button className="new-game">New game</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default ResultBox
