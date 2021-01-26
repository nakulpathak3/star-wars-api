import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: '', query: '', resource: this.props.resource};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    axios
    .get('/api/' + this.state.resource + '/search/' + this.state.query)
    .then(resp => this.setState({response: resp.data}))
    .catch((error) => {
      console.log(error);
    });
    
    event.preventDefault();
  }

  renderResponse() {
    if (this.state.response === "") return;
    console.log(this.state.response)
    return <div>
      {this.state.response.map(function(name,  index) {
        return <li key={index}>
          {Object.keys(name).map(function(key) {
            return <div>{key}: {name[key]}</div>;
          })}
        </li>;
      })}
    </div>
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Query:
            <input type="text" value={this.state.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.renderResponse()}
      </div>
    );
  }
}

export default SearchForm;
