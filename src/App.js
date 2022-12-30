import React from "react";
import { Routes, Route } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigationComponent/MainNavigations";
import Users from './user/pages/Users';

const App = () => {
  return (
    <div className="App">
      <MainNavigation />
      <main>
        <Routes>
            <Route path="/" element={ <Users/> } />
            <Route path="/place/new" element={ <NewPlace/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;