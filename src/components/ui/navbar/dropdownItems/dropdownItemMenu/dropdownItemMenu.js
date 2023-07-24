import { useState, useEffect } from "react";

import { userItems } from '../dropdownItems/userItems';
import { guestItems } from '../dropdownItems/guestItems';
import UserItemList from '../dropdownItemList/dropdownItemList';

import './dropdownItemMenu.css'
import { getCurrentUser } from "../../../../../auth/isAuthenticated";

const UserItemMenu = () => {
  const [items, setItems] = useState(guestItems);
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());

  useEffect(() => {
    if (loggedUser) {
      setItems(userItems)
    }
  }, [loggedUser])

  return (
    <ul className="user-item-menu">
      {items.map((menu, index) => {
        return <UserItemList items={menu} key={index} />;
      })}
    </ul>
  );
};

export default UserItemMenu;