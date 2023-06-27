import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.transaction_history_head}>
        <tr>
          <th className={css.transaction_history_title}>Type</th>
          <th className={css.transaction_history_title}>Amount</th>
          <th className={css.transaction_history_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.transaction_history_row} key={id}>
            <td className={css.transaction_history_desc}>{type}</td>
            <td className={css.transaction_history_desc}>{amount}</td>
            <td className={css.transaction_history_desc}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
