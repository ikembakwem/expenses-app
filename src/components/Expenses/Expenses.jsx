import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};
export default Expenses;
