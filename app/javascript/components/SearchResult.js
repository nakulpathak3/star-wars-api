import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    const q_params = new URLSearchParams(this.props.location.search);
    this.state = {
      response: null,
      query: q_params.get('query'),
      path: props.match.path,
    };
  }

  componentDidMount() {
    console.log('/api' + this.state.path + this.state.query)
    axios
    .get('/api' + this.state.path + this.state.query)
    .then(resp => this.setState({response: resp.data}))
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { response } = this.state;
    if (response === null) return null;
    console.log(this.state)

    return (
      <div>
        <h2>{this.state.path.replace(/\//g, ' ')}</h2>
        <div>
          {response.map(function(name,  index) {
            return <li key={index}>
              {Object.keys(name).map(function(key) {
                return <div>{key}: {name[key]}</div>;
              })}
            </li>;
          })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
