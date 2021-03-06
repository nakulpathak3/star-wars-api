import React from 'react';
import axios from 'axios';

class All extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: null,
      path: props.match.path,
    };
  }

  componentDidMount() {
    axios
      .get('/api' + this.state.path)
      .then(resp => this.setState({ response: resp.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { response } = this.state;
    if (response === null) return null;

    return (
      <div>
        <h2>{this.state.path.replace(/\//g, '')}</h2>
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

export default All;
