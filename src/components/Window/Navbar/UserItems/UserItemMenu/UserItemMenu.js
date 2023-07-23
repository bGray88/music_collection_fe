import { useState, useEffect } from "react";
import Cookies from 'js-cookie'

import { userItems } from '../UserItems/UserItems';
import { guestItems } from '../UserItems/GuestItems';
import UserItemList from '../UserItemList/UserItemList';

import './UserItemMenu.css'

const UserItemMenu = () => {
  const [items, setItems] = useState(guestItems);

  useEffect(() => {
    if (!Cookies.get("user")) {
      setItems(guestItems);
    } else {
      setItems(userItems)
    }
  }, [])

  return (
    <ul className="user-item-menu">
      {items.map((menu, index) => {
        return <UserItemList items={menu} key={index} />;
      })}
    </ul>
  );
};

export default UserItemMenu;