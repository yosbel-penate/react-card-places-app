import React from 'react'
import {useParams} from 'react-router-dom'

import PlaceList from "../components/PlaceListComponent/PlaceList";

const DUMMY_PLACES=[
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    ImageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/df/NYC_Empire_State_Building.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:'40.7484445',
      lng:'73.9878531',
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world',
    ImageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/df/NYC_Empire_State_Building.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:'40.7484445',
      lng:'73.9878531',
    },
    creator: 'u2'
  },
 
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(places=>places.creator===userId)
  return (
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces