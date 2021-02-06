import React from 'react';
import axios from 'axios';

class Id extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
    console.log("ID construct: Got called with " + this.props.match.url);
    this.makeRequest = this.makeRequest.bind(this)
  }

  makeRequest(url) {
    console.log("Making request with " + url);
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
    console.log("ID Mount: Got called with " + this.props.match.url);
    this.makeRequest(this.props.match.url);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.url !== nextProps.match.url) {
      this.makeRequest(nextProps.match.url);
    }
  }

  render() {
    console.log("ID Render: Got called with " + this.props.match.url);

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
