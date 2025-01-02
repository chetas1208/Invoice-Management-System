import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';
import Avtar from '../../Shared/Components/UIElements/Avatar';
import Card from '../../Shared/Components/UIElements/Card';

const UsersItem = props => {
    return (
        <li className='user-item'>
                <Card className='user-item-content'>
                    <Link to={`/${props.id}/places`} >
                        <div className='user-item-image'>
                            <Avtar image={props.image} alt={props.name} />
                        </div>
                        <div className='user-item-info'>
                            <h2>{props.name}</h2>
                            <h3>
                                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
                            </h3>
                        </div>
                    </Link>
                </Card>
        </li>
    );
}

export default UsersItem;