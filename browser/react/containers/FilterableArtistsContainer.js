import React from 'react';
import Artists from '.././components/Artists';
import FilterInput from '.././components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render () {
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={} />
      </div>
    )
  }





}
