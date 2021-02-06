import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import SearchResult from './SearchResult';
import All from './All';
import Form from './Form';
import Id from './Id';

const App = () => (
  <HashRouter>
    <div>
      <h1>Star Wars</h1>
      <ul className="header">
      {['people', 'films', 'planets', 'species', 'vehicles', 'starships'].map((resource, index) => {
        return (
          <div key={index + resource + 'div'}>
            <li key={index}>{resource}</li>
            <ul key={index + resource}>
              <li key={resource}><NavLink to={'/' + resource}>All</NavLink></li>
              <li key={resource + '/id'}><Form resource={resource} searchBy='id'/></li>
              <li key={resource + '/search'}><Form resource={resource} searchBy='search'/></li>
            </ul>
          </div>
        );
      })}
      </ul>
      <div className="content">
      {['people', 'films', 'planets', 'species', 'vehicles', 'starships'].map((resource, index) => {
        return (
          <div key={resource}>
            <Route exact path={'/'+ resource} component={All}/>
            <Route path={'/' + resource + '/:id/'} component={Id}/>
            <Route path={'/search/' +  resource + '/'} component={SearchResult}/>
          </div>
        );
      })}
      </div>
    </div>
  </HashRouter>
);

export default App;
