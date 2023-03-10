import React from 'react'

import UsersItem from '../UserItemComponent/UserItem';
import './UserList.css'

const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        );
    }

    return <ul className = 'users-list'>
        {props.items.map(user => {
            return <UsersItem
                        key = {user.id}
                        id = {user.id}
                        image = {user.image}
                        name = {user.name}
                        placeCount={user.places}
                    />
        })}
    </ul>
};

export default UsersList;