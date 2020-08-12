import React, { Component } from 'react'
import './view.css'
import SongTable from './songtable.js'
export default class View extends Component {
    render() {
        return (
            <div className = "page">
                <div className = "topPart">
                    <h1 id = "title"> Songs</h1>
                </div>
                <SongTable className = "topPart"/>
            </div>

        )
    }
}
