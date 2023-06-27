import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import randomColor from 'randomcolor';

// function getRandomHexColor() {
//   let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   return bgColor;
// }
// const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
// console.log(randomColor);

const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <section>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
          {stats.map(item => (
            <li
              key={item.id}
              className={css.stat_list_item}
              style={{
                backgroundColor: randomColor(),
              }}
            >
              <span className={css.stat_list_label}>{item.label}</span>
              <span className={css.stat_list_percentage}>
                {item.percentage}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
