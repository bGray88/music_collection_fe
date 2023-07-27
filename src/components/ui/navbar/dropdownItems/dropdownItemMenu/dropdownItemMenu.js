import { useState, useEffect } from "react";

import { userItems } from '../dropdownItems/userItems';
import { guestItems } from '../dropdownItems/guestItems';
import DropdownItemList from '../dropdownItemList/dropdownItemList';

import './dropdownItemMenu.css'

const DropdownItemMenu = (props) => {
  const [items, setItems] = useState(guestItems);

  useEffect(() => {
    if (props.loggedUser) {
      setItems(userItems)
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