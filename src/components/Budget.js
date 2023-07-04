import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [modifiedBudget, setModifiedBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const checkChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 20000){
            alert('Budget would exceed max of 20000.');
            setModifiedBudget(modifiedBudget);
            return;
        }
        if (value < totalExpenses ){
            alert('Budget cannot be lower than allocated spend.');
            setModifiedBudget(totalExpenses);
            return;
        }
        else {
            const value = parseInt(event.target.value);
            setModifiedBudget(isNaN(value) ? 0 : value);
        }
    }
  
    return (
      <div className='alert alert-secondary'>
        <span>Budget: {currency}{
        <input
          type='number'
          step='10'
          value={modifiedBudget}
          onChange={checkChange}
        />
        }</span>
      </div>
    );
  };
export default Budget;