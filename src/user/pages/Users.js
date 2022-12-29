import React from 'react';
import UsersList from '../components/UserListComponent/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Pepe',
            image:'mariposa.png',
            places: 11
        },
        {
            id: 'u2',
            name: 'Mario',
            image:'mariposa.png',
            places: 12
        },
        {
            id: 'u3',
            name: 'Ana',
            image:'mariposa.png',
            places: 14
        }
    ]
    return <UsersList items={USERS}/>
}

export default Users;