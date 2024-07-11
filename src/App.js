// src/App.js
import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Projects.</h1>
      <div className="card-container">
        <Card
          title="TradingBlog"
          subtitle="Trading"
          description="To be updated with more specific projects in future"
          image="src/tr.jpg"
        />
      </div>
    </div>
  );
}

export default App;
