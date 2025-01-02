import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../Components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'pl1',
        title: 'Ajanta - Elora Caves',
        description: 'These caves are situated in Maharashtra, India.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.WMMAVAGpT3IO7tEbJu6FXQHaE8&pid=Api&P=0&h=180',
        address: 'Maharashtra, India',
        location: {
            lat: '20.0268°N',
            lng: '75.1771°E'
        },
        creator: 'u1',
    },
    {
        id: 'pl1',
        title: 'Ajanta - Elora Caves',
        description: 'These caves are situated in Maharashtra, India.',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.WMMAVAGpT3IO7tEbJu6FXQHaE8&pid=Api&P=0&h=180',
        address: 'Maharashtra, India',
        location: {
            lat: '20.0268°N',
            lng: '75.1771°E'
        },
        creator: 'u2',
    }
];


const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;