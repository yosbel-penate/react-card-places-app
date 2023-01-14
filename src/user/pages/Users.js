import React from 'react';
import UsersList from '../components/UserListComponent/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Pepe Hernandez',
            image:'userImg/user-1.jpg',
            places: 11
        },
        {
            id: 'u2',
            name: 'Mario Lunas',
            image:'userImg/user-3.jpg',
            places: 12
        },
        {
            id: 'u3',
            name: 'Ana Maria',
            image:'userImg/user-2.jpg',
            places: 14
        }
    ]
    return <UsersList items={USERS}/>
}

export default Users;