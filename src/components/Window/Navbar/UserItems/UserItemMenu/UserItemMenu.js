import { userItems } from '../UserItems/UserItems';
import UserItemList from '../UserItemList/UserItemList';
import './UserItemMenu.css'

const UserItemMenu = () => {
  return (
    <ul className="user-item-menu">
      {userItems.map((menu, index) => {
        return <UserItemList items={menu} key={index} />;
      })}
    </ul>
  );
};

export default UserItemMenu;