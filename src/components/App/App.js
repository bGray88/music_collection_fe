import React from "react";

import "./app.css";

import Switch from '../../routes/switch'

function App () {
  return (
    <div>
      <div className="main-navbar">
        <Switch />
      </div>
      <div className="main-container">
      </div>
    </div>
  );
}

export default App;
