import React, { useState } from 'react';

import Card from '../../Shared/Components/UIElements/Card';
import Button from '../../Shared/Components/FormElements/Button';
import Modal from '../../Shared/Components/UIElements/Modal';
import Map from '../../Shared/Components/UIElements/Map';
import './PlaceItem.css';

const PlaceItem = props => {

    const [showMap, setShowMap] = useState(false);

    const openMaphandler = () => setShowMap(true);

    const closeMaphandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal show={showMap}
                onCancel={closeMaphandler}
                header={props.address}
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
                footer={<Button onClick = {closeMaphandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map center={props.coordinates} zoom= {16} />
                </div>
            </Modal>

            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMaphandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
}

export default PlaceItem;