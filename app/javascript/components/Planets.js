import React from 'react';
import axios from 'axios';

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/planets/1')
      .then(response => this.setState({ planets: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { planets } = this.state;
    if (planets === null) return null;

    return (
      <div>
        <h2>planets</h2>
        <div>
          {Object.keys(planets).map(function(key) {
            return <div>{key}: {planets[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Planets;
