import './ExpenseItem.css';

const ExpenseItem = () => (
  <div className="expense-item">
    <div>November 14th 2022</div>
    <div className="expense-item__description">
      <h2>Car Insurance</h2>
      <div className="expense-item__price">$294.67</div>
    </div>
  </div>
);

export default ExpenseItem;
