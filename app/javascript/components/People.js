import React from 'react';
import {
  Route,
  NavLink
} from "react-router-dom";
import axios from 'axios';

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: null,
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('/api/people/1')
  //     .then(response => this.setState({ people: response.data }))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <HashRouter>
      <div>
        <h2>People</h2>
        <ul className="header">
          <li><NavLink to="/people/all">All</NavLink></li>
          <li><NavLink to="/people/:id?">By ID</NavLink></li>
          <li><NavLink to="/people/:search?">Search</NavLink></li>
        </ul>
        <div className="content">
          <Route path="/people/all" component={People}/>
          <Route path="/people/:id?" component={People}/>
          <Route path="/people/:search?" component={People}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default People;
