import { useState, useEffect, useRef } from "react";

import Dropdown from '../../../Dropdown/Dropdown';
import { getCurrentUserName } from "../../../../../Auth/IsAuthenticated";

const DropdownItemList = (props) => {
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
    if (props.loggedUser && name === "User") {
      return getCurrentUserName();
    } else {
      return name
    }
  }

  return (
    <li className="user-item-list" ref={ref}>
      {props.items.submenu ? (
        <div>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {showLoggedUser(props.items.title)}{' '}
          </button>
          <Dropdown submenus={props.items.submenu} dropdown={dropdown} loggedUser={props.loggedUser} />
        </div>
      ) : (
        <a href={props.items.url}>{props.items.title}</a>
      )}
    </li>
  );
};

export default DropdownItemList;