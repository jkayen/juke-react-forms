import React, { Component } from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      inputValue: '',
      hasTyped: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    let value = event.target.value;
    this.setState({
      inputValue: value,
      hasTyped: true
    });
  }

  handleSubmit(event){
    event.preventDefault()
    console.log('string', this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }


  render(){
    return (
      <div>
        <NewPlaylist
          inputValue={this.state.inputValue}
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          disabled={!(this.state.inputValue.length < 17) || !(this.state.inputValue.length > 0)}
          hasTyped={this.state.hasTyped}
        />
      </div>
    )

  }
}
