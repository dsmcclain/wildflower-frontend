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
              <Link to="/new/">Add Flower</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/index/" component={Flowers} />
        <Route path="/new/" component={AddFlower} />
      </div>
    </Router>
  );
}

export default App;
