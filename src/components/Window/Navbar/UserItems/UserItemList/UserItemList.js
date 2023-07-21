import React, { useState } from 'react';
import Dropdown from '../../../Dropdown/Dropdown';

const UserItemList = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="user-item-list">
      {items.submenu ? (
        <div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </div>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default UserItemList;