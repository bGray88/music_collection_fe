import { useState, useEffect, useRef } from "react";

import Dropdown from '../../../dropdown/dropdown';
import { getCurrentUser, isAuthenticated } from "../../../../../auth/isAuthenticated";

const DropdownItemList = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const [loggedUser, setLoggedUser] = useState(getCurrentUser());
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

  useEffect(() => {
    setLoggedUser(getCurrentUser);
  }, [isAuthenticated()])

  const showLoggedUser = (name) => {
    if(name === "User" && Object.keys(loggedUser).length !== 0) {
      return ''
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

export default DropdownItemList;