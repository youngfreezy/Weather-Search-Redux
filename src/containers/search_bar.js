import React, {Component} from 'react';
export default class SearchBar extends Component {
  //initialize state first
  constructor(props) {
    super(props);
    this.state = {term : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five day forecast"
          className="form-control"
          //make it a controlled componenet by input value to state
          value={this.state.term}
          //this undefined b/c wrapped it in fat arrow function before, which synced scopes
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
  }
}