import React from "react";
import { Routes, Route } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace";
import Users from './user/pages/Users';

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <Users/> } />
          <Route path="/place/new" element={ <NewPlace/> } />
      </Routes>
    </div>
  )
}

export default App;