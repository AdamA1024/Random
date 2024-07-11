// src/App.js
import React from 'react';
import './App.css';
import Card from './components/Card';
import { themes } from './themes';
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
          theme={themes.nidoTheme}
        />
      </div>
      <div className="card-container">
        <Card
          title="RISC-V CPU"
          subtitle="Computer Architecture"
          description="To be updated with more specific projects in future"
          image="src/tr.jpg"
          theme={themes.greenTheme}
        />
      </div>
      <div className="card-container">
        <Card
          title="BalanceBot"
          subtitle="Web Development"
          description="To be updated with more specific projects in future"
          image="src/tr.jpg"
          theme={themes.blackTheme}
        />
      </div>
    </div>
  );
}

export default App;
