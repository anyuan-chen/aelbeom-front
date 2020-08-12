import React, { Component } from 'react'
import './shared.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";export default class navbar extends Component {
    render() {
        return (
            <nav className = "navbar">
                <ul>
                    <Link className = "listElements" to = "/"> Home </Link>
                    <Link className = "listElements" to = "/view"> View List </Link>
                    <Link className = "listElements" to = "/add"> Add New Song </Link>
                </ul>
            </nav>
        )
    }
}
