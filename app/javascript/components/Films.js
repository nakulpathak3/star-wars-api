import React from 'react';
import axios from 'axios';

class Films extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/films/1')
      .then(response => this.setState({ films: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { films } = this.state;
    if (films === null) return null;

    return (
      <div>
        <h2>films</h2>
        <div>
          {Object.keys(films).map(function(key) {
            return <div>{key}: {films[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Films;
