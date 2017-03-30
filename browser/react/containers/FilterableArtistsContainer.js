import React from 'react';
import Artists from '.././components/Artists';
import FilterInput from '.././components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {
    const inputValue = this.state.inputValue;
    {/* Using the inputValue received from FilterInput, we check for a match
    within Artist.js.name and pass a matched artist name as a prop to Artists as
    and array which allows the artist.map function in Artists.js to not shit itself */}
    const filteredArtist = this.props.artists.filter(artist => {
      return artist.name.match(inputValue);
    })
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtist} />
      </div>
    );
  }





}
