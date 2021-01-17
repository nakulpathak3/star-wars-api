import React from 'react';
import axios from 'axios';

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/people/1')
      .then(response => this.setState({ people: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { people } = this.state;
    if (people === null) return null;

    return (
      <div>
        <h2>People</h2>
        <div>
          {Object.keys(people).map(function(key) {
            return <div>{key}: {people[key]}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default People;
