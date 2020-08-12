import React, { Component, useState, useEffect } from 'react'
import './view.css'
import Table from 'react-bootstrap/Table'
export default function SongTable() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [JSData, setJSData] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('http://localhost:1989/get');
        const JSData = await data.json();
        setJSData(JSData);
    }
    const components = JSData.map(
        song => 
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.rating}</td>
        </tr>
    )
    return (
        <Table>
            <thead>
                <th>Title</th>
                <th>Artist Name</th>
                <th>Rating</th>
            </thead>
            <tbody>
                {components}
            </tbody>
        </Table>
    )
    
}


