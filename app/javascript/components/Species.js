import React from 'react';
import axios from 'axios';

class Species extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      species: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/species/1')
      .then(response => this.setState({ species: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { species } = this.state;
    if (species === null) return null;

    return (
      <div>
        <h2>species</h2>
        <div>
          {Object.keys(species).map(function(key) {
            return <div>{key}: {species[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Species;
