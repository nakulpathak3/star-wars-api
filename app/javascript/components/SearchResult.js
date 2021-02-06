import React from 'react';
import axios from 'axios';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = { response: null };
    this.makeRequest = this.makeRequest.bind(this)
  }

  makeRequest(path, query) {
    console.log("SR MakeRequest: Got called with " + path + query);
    axios
    .get('/api' + path + query)
    .then(resp => this.setState({response: resp.data}))
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log("SR Mount: Got called with " + this.props.match.path);
    const query = new URLSearchParams(this.props.location.search).get('query');
    this.makeRequest(this.props.match.path, query);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.path !== nextProps.match.path || this.props.location.search !== nextProps.location.search) {
      const query = new URLSearchParams(nextProps.location.search).get('query');
      this.makeRequest(nextProps.match.path, query);
    }
  }

  render() {
    console.log("SR Render")
    const { response } = this.state;
    if (response === null) return null;

    return (
      <div>
        <h2>{this.props.match.path.replace(/\//g, ' ')}</h2>
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
