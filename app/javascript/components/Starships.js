import React from 'react';
import axios from 'axios';

class Starships extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      starships: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/starships/9')
      .then(response => this.setState({ starships: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { starships } = this.state;
    if (starships === null) return null;

    return (
      <div>
        <h2>starships</h2>
        <div>
          {Object.keys(starships).map(function(key) {
            return <div>{key}: {starships[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Starships;
