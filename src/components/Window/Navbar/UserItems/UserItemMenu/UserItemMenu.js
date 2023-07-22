import { useState, useEffect } from "react";

import { userItems } from '../UserItems/UserItems';
import { guestItems } from '../UserItems/GuestItems';
import UserItemList from '../UserItemList/UserItemList';

import './UserItemMenu.css'

const UserItemMenu = ({ loggedUser, user }) => {
  const [items, setItems] = useState(guestItems);

  useEffect(() => {
    if (!loggedUser) {
      setItems(guestItems);
    } else {
      setItems(userItems)
    }
  }, [loggedUser])

  return (
    <ul className="user-item-menu">
      {items.map((menu, index) => {
        return <UserItemList items={menu} key={index} loggedUser={loggedUser} user={user} />;
      })}
    </ul>
  );
};

export default UserItemMenu;