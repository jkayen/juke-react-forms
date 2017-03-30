import React, { Component } from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends React.Component{
  constructor(){
    super()
    this.state = { inputValue: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    event.preventDefault()
    let value = event.target.value;
    if(value.length > 16) value = value.slice(0,16)
    this.setState({
      inputValue: value
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
    return(
      <NewPlaylist inputValue={this.state.inputValue} onSubmit={this.handleSubmit} handleChange={this.handleChange} />
    )

  }
}
