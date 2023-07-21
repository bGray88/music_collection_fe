const Dropdown = ({ submenus, dropdown }) => {
  return (
   <ul className={`user-dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="user-dropdown-item">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;