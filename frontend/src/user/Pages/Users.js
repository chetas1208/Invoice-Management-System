import React from 'react';

import UsersList from '../Components/UsersList';

const Users = () => {
    const USERS = [
        {
         id : 'ul',
         name : 'Chetas N Parekh',
         image : 'https://tse4.mm.bing.net/th?id=OIP.oQjpYhZgwtVaCdK5BUFheAHaEK&pid=Api&P=0&h=180',
         places : 50
        }
    ];

    return (
        <UsersList items={USERS}/>
    );
}

export default Users;