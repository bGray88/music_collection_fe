import { useState, useEffect } from "react";

import { userItems } from '../DropdownItems/UserItems';
import { guestItems } from '../DropdownItems/GuestItems';
import DropdownItemList from '../DropdownItemList/DropdownItemList';

import './DropdownItemMenu.css'

const DropdownItemMenu = (props) => {
  const [items, setItems] = useState(guestItems);

  useEffect(() => {
    if (props.loggedUser) {
      setItems(userItems)
    } else {
      setItems(guestItems)
    }
  }, [props.loggedUser])

  return (
    <ul className="user-item-menu">
      {items.map((menu, index) => {
        return <DropdownItemList items={menu} key={index} loggedUser={props.loggedUser} />;
      })}
    </ul>
  );
};

export default DropdownItemMenu;