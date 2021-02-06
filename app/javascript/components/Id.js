import React from 'react';
import axios from 'axios';

class Id extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
    this.makeRequest = this.makeRequest.bind(this)
  }

  makeRequest(url) {
    axios
    .get('/api' + url)
    .then(resp => {
      this.setState({response: resp.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.makeRequest(this.props.match.url);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.url !== nextProps.match.url) {
      this.makeRequest(nextProps.match.url);
    }
  }

  render() {
    const { response } = this.state;
    const { url } = this.props.match;
    if (response === null) return null;

    return (
      <div>
        <h2>{url}</h2>
        <div>
          {Object.keys(response).map(function(key) {
            return <div>{key}: {response[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Id;
