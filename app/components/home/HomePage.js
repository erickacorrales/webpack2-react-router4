
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Demo</h1>
        <p>Configuration React, React Router 4, bootstrap, webpack-server with Webpack2 in ES6.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
