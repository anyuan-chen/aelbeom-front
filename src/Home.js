import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'
export default class Home extends Component {
    render() {
        return (
            <div className = "homepage">
                <img className = 'img' src = {logo} alt = "logo"></img>
            </div>
        )
    }
}
