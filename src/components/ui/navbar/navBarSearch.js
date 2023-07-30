import React from "react";
import { NavSearchInput } from "./navBarElements";

const NavBarSearch = (props) => {

  const handleChange = (event) => {
    props.handleSearchText(event.target.value);
  }

  return (
    <NavSearchInput
      type="text"
      placeholder="Search"
      value={props.searchText}
      onChange={handleChange}
    >
    </NavSearchInput>
  );
}

export default NavBarSearch;