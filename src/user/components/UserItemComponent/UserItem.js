import React from 'react'
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/UIElements/AvatarComponent/Avatar';
import Card from '../../../shared/components/UIElements/CardComponent/Card';
import './UserItem.css'

const UsersItem = props => {
    return (
        <li className="user-item">
                <Card className="user-item__content">
                    <Link to={`${props.id}/places`}>
                        <div className="user-item__image">
                            <Avatar image = {props.image} alt={props.name} />
                        </div>
                        <div className="user_item__info">
                            <h2>{props.name}</h2>
                            <h2>{props.placeCount}</h2>
                        </div>
                    </Link>
                </Card>
        </li>
    );
};

export default UsersItem;