const Dropdown = (props) => {
  return (
   <ul className={`user-dropdown ${props.dropdown ? "show" : ""}`}>
      {props.submenus.map((submenu, index) => (
        <li key={index} className="user-dropdown-item">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;