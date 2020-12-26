import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <h1>Hello {this.props.name}</h1>
            </nav>
        )
    }
}

export default Navbar