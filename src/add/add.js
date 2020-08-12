import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class Add extends Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formSongTitle">
                    <Form.Label>Song Title</Form.Label>
                    <Form.Control type="text" placeholder="Style" />
                </Form.Group>

                <Form.Group controlId="formSongArtist">
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control type="text" placeholder="Taylor Swift" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
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
                        axios.post('http://localhost:1989/post', {
                            title: "pog",
                            artist: "andrew",
                            rating: 1
                        })
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
