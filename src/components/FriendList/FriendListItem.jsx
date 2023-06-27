import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friend_list_item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img
        className={css.friend_list_item_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

// if (({ isOnline === true }))

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
