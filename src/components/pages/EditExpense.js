import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../../actions/expenses";

// trigger an action to update state based on matching expense.

const EditExpense = props => {
  console.log("props", props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log("props2", props);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditExpense);
