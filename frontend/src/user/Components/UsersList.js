import React from 'react';

import './UsersList.css';
import UsersItem from './UserItem';
import Card from '../../Shared/Components/UIElements/Card';

const UsersList = props => {
    if(props.items.length===0)
    {
        return (
            <div className='center'>
                <Card>
                 <h2>No User found</h2>
                 </Card>
            </div>
        );
    }

    return(
        <ul className='user-list'>
            {props.items.map(user => {
                return <UsersItem key={user.id} 
                                  id={user.id} 
                                  image={user.image} 
                                  name={user.name}
                                  placeCount={user.places} />;
            })}
        </ul>
    );
}

export default UsersList;