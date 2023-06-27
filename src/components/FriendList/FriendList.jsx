import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
