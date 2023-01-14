import React from 'react'

import './PlaceList.css'
import Card from '../../../shared/components/UIElements/CardComponent/Card'
import PlaceItem from '../PlaceItemComponent/PlaceItem'

const PlaceList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
               <Card>
                    <h2>No place found. Mybe create one?</h2>
                    <button>Share place</button>
               </Card>
            </div>
    }
    return <ul className="place-list">
        {props.items.map(place => 
           <PlaceItem
                key={place.id}
                id={place.id}
                image={place.ImageUrl}
                title={place.titel}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.location} 
            />
        )}
    </ul>
 
}

export default PlaceList