import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsediting] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const addEditing = () => {
    setIsediting(true);
  };
  const cancelEditing = () => {
    setIsediting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={addEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancel={cancelEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
