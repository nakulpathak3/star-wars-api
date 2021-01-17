import React from 'react';
import axios from 'axios';

class Vehicles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/vehicles/4')
      .then(response => this.setState({ vehicles: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { vehicles } = this.state;
    if (vehicles === null) return null;

    return (
      <div>
        <h2>vehicles</h2>
        <div>
          {Object.keys(vehicles).map(function(key) {
            return <div>{key}: {vehicles[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Vehicles;
