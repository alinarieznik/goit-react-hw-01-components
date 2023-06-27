import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div key={username} className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Followers</span>
          <span className={css.stats_quantity}>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Views</span>
          <span className={css.stats_quantity}>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Likes</span>
          <span className={css.stats_quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
