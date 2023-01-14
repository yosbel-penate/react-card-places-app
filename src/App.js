import React from "react";
import { Routes, Route } from "react-router-dom"

import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigationComponent/MainNavigations";
import Users from './user/pages/Users';

const App = () => {
  return (
    <div className="App">
      <MainNavigation />
      <main>
        <Routes>
            <Route path="/" element={ <Users/> } exact/>
            <Route path="/:userId/places" element={< UserPlaces/>} exact/>
            <Route path="/place/new" element={ <NewPlace/> } exact/>
        </Routes>
      </main>
    </div>
  )
}

export default App;