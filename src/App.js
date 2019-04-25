import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h2>Home</h2>
}

function Flowers() {
  return <h2>Flowers</h2>
}

function AddFlower() {
  return <h2>Add Flower</h2>
}

function ShowFlower({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>
}

function ShowFlowers({ match }) {
  return (
    <div>
      <h2>Show Flower & Sightings</h2>

      <ul>
        <li>
          <Link to={`${match.url}/add-sighting`}>Add Sighting</Link>
        </li>
        <li>
          <Link to={`${match.url}/edit`}>Edit Flower</Link>
        </li>
        <li>
          <Link to={`${match.url}/delete`}>Delete Flower</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={ShowFlower} />
      <Route exact path={match.path} render={() => <h3>Please select an option.</h3>} />
    </div>
  )
}


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/index/">Flowers</Link>
            </li>
            <li>
              <Link to="/show/">Show Flower</Link>
            </li>
            <li>
              <Link to="/new/">Add Flower</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/index/" component={Flowers} />
        <Route path="/show/" component={ShowFlowers} />
        <Route path="/new/" component={AddFlower} />
      </div>
    </Router>
  );
}

export default App;
