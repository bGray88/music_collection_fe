import React, { useEffect, useState } from "react";

import "./app.css";

import Switch from '../../routes/switch'
import { getCurrentUser } from "../../auth/isAuthenticated";

function App() {
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());

  return (
    <div className="app">
      <Switch loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
    </div>
  );
}

export default App;
