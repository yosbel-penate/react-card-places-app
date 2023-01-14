import React, {useState} from 'react'
import Button from '../../../shared/components/FormElements/Button';

import Card from "../../../shared/components/UIElements/CardComponent/Card";
import Modal from '../../../shared/components/UIElements/ModalComponent/Modal';
import './PlaceItem.css'

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false)
  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        constentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>The map!</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
                <img class="imgContainer" src={props.image} alt={props.title}/>
              <div className="place-item__image">
                <div class="container">
                  <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                  </div>
                  <div className="place-item__actions">
                    <Button invese onClick={openMapHandler}>View on map</Button>
                    <Button to={`/places/${props.id}`}>Edit</Button>
                    <Button danger>Delete</Button>
                  </div>
                </div>
            </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem