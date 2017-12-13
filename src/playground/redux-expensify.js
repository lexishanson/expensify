import { createStore, combineReducers } from "redux";
import uuid from "uuid";
// AddExpense action creator
const addExpense = (
  { description = "", notes = "", amount = 0, createdAt = 0 } = {}
) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// edit expenses
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

// expenses
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return [...state.filter(({ id }) => id !== action.id)];
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filters reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof startDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // figure out if expenses.description has the text variable string inside of it
      // includes, convert both strings to lowercase
      // var re = new RegExp(text, "gi");
      // const textMatch = expense.description.match(re);
      // sort gets called on an array and returns an array, so we can chain it
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      // sortBy -> amount
      // put the ones with a greater amount first
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("visible expenses", visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 300, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 100, createdAt: 11000 })
);
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// //
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount()); // sortBy should be equal to string amount
// store.dispatch(sortByDate()); // sortBy property should be set equal to date
//
// store.dispatch(setStartDate(Date.now()));
// store.dispatch(setStartDate(100)); // should get set to undefined
// store.dispatch(setEndDate(-1100));
// store.dispatch(setEndDate(Date.now()));

const demoState = {
  expenses: [
    {
      id: "eihxsuiefd",
      description: "Nov Rent",
      notes: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
