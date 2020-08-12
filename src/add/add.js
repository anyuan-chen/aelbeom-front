import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Style', 
            artist: 'Taylor Swift', 
            rating: 3
        }
        this.titleRef = React.createRef();
        this.artistRef = React.createRef();
        this.ratingRef = React.createRef();
        this.titleChange = this.titleChange.bind(this);
        this.artistChange = this.artistChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
    }
    titleChange(event){
        this.setState({title: event.target.value, artist: this.state.artist, rating: this.state.rating})
    }
    artistChange(event){
        this.setState({title: this.state.title, artist: event.target.value, rating: this.state.rating})
    }
    ratingChange(event){
        console.log(event.target.value);
        this.setState({title: this.state.title, artist: this.state.artist, rating: parseInt(event.target.value)})
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="formSongTitle">
                    <Form.Label>Song Title</Form.Label>
                    <Form.Control type="text" placeholder="Style" ref={this.titleRef} onChange ={this.titleChange}/>
                </Form.Group>

                <Form.Group controlId="formSongArtist">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Taylor Swift" ref = {this.artistRef} onChange = {this.artistChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" ref = {this.ratingRef} onChange = {this.ratingChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" onClick= {() => {
                    const axios = require('axios');
                    const postAPI = async () =>  {
                        axios.post('http://localhost:1989/post', 
                        this.state)
                        .then(response =>{
                            console.log(response);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                    postAPI();
                }}>
                    Submit
                </Button>
        </Form>
        )
    }
}
