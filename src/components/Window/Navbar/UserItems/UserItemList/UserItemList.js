import { useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie'

import Dropdown from '../../../Dropdown/Dropdown';

const UserItemList = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const showLoggedUser = (name) => {
    if(name === "User" && Object.keys(Cookies.get("user_name")).length !== 0) {
      return Cookies.get("user_name")
    } else {
      return name
    }
  }

  return (
    <li className="user-item-list" ref={ref}>
      {items.submenu ? (
        <div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {showLoggedUser(items.title)}{' '}
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