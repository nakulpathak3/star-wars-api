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
import SearchForm from './SearchForm';
import All from './All';

const App = () => (
  <HashRouter>
    <div>
      <h1>Star Wars</h1>
      <ul className="header">
        <li>People</li>
        <ul>
          <li key="/people"><NavLink to="/people">All</NavLink></li>
          <li key="/people/id"><NavLink to="/people/:id?">By ID</NavLink></li>
          <li key="/people/search"><SearchForm resource='people'/></li>
        </ul>
        <li>Films</li>
        <ul>
          <li key="/films"><NavLink to="/films">All</NavLink></li>
          <li key="/films/id"><NavLink to="/films/:id?">By ID</NavLink></li>
          <li key="/films/search"><SearchForm resource='films'/></li>
        </ul>
        <li>Planets</li>
        <ul>
          <li><NavLink to="/planets">All</NavLink></li>
          <li><NavLink to="/planets/:id?">By ID</NavLink></li>
          <li><SearchForm resource='planets'/></li>
        </ul>
        <li>Species</li>
        <ul>
          <li><NavLink to="/species">All</NavLink></li>
          <li><NavLink to="/species/:id?">By ID</NavLink></li>
          <li><SearchForm resource='species'/></li>
        </ul>
        <li>Vehicles</li>
        <ul>
          <li><NavLink to="/vehicles">All</NavLink></li>
          <li><NavLink to="/vehicles/:id?">By ID</NavLink></li>
          <li><SearchForm resource='vehicles'/></li>
        </ul>
        <li>Starships</li>
        <ul>
          <li><NavLink to="/starships">All</NavLink></li>
          <li><NavLink to="/starships/:id?">By ID</NavLink></li>
          <li><SearchForm resource='starships'/></li>
        </ul>
      </ul>
      <div className="content">
        <Route path="/people" component={All}/>
        <Route path="/films" component={All}/>
        <Route path="/planets" component={All}/>
        <Route path="/species" component={All}/>
        <Route path="/vehicles" component={All}/>
        <Route path="/starships" component={All}/>

        <Route path="/people/:id?" component={People}/>
        <Route path="/people/:search?" component={People}/>
        <Route path="/films/:id?" component={Films}/>
        <Route path="/films/:search?" component={films}/>
        <Route path="/planets/:id?" component={Planets}/>
        <Route path="/planets/:search?" component={Planets}/>
        <Route path="/species/:id?" component={Species}/>
        <Route path="/species/:search?" component={Species}/>
        <Route path="/vehicles/:id?" component={Vehicles}/>
        <Route path="/vehicles/:search?" component={Vehicles}/>
        <Route path="/starships/:id?" component={Starships}/>
        <Route path="/starships/:search?" component={Starships}/>
      </div>
    </div>
  </HashRouter>
);

export default App;
