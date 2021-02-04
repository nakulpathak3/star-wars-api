import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      response: null,
      url: props.match.url,
    };
  }

  componentDidMount() {
    console.log('/api' + this.state.url)
    axios
    .get('/api' + this.state.url)
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
        <h2>{this.state.url}</h2>
        <div>
          {Object.keys(response).map(function(key) {	
            return <div>{key}: {response[key]}</div>;	
          })}
        </div>
      </div>
    );
  }
}

export default SearchResult;
