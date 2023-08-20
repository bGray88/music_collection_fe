import React, { useEffect, useState } from "react";

import "./App.css";

import Switch from '../../Routes/Switch'
import { getCurrentUser } from "../../Auth/IsAuthenticated";

function App() {
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());

  return (
    <div className="app">
      <Switch loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
    </div>
  );
}

export default App;
