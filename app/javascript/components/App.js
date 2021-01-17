import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import People from './People';
import Films from './Films';
import Planets from './Planets';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';

const App = () => (
  <HashRouter>
    <div>
      <h1>Star Wars</h1>
      <ul className="header">
        <li><NavLink to="/people">People</NavLink></li>
        <li><NavLink to="/films">Films</NavLink></li>
        <li><NavLink to="/planets">Planets</NavLink></li>
        <li><NavLink to="/species">Species</NavLink></li>
        <li><NavLink to="/vehicles">Vehicles</NavLink></li>
        <li><NavLink to="/starships">Starships</NavLink></li>
      </ul>
      <div className="content">
        <Route path="/people" component={People}/>
        <Route path="/films" component={Films}/>
        <Route path="/planets" component={Planets}/>
        <Route path="/species" component={Species}/>
        <Route path="/vehicles" component={Vehicles}/>
        <Route path="/starships" component={Starships}/>
      </div>
    </div>
  </HashRouter>
);

export default App;
