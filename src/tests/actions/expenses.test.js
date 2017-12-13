import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("it should set up removeExpense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("it should set up editExpense action object", () => {
  const action = editExpense("123abc", { note: "new thing" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new thing" }
  });
});

test("it should set up addExpense action object", () => {
  const expenseData = {
    description: "this is a description",
    notes: "exampe note",
    amount: 100,
    createdAt: 123
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("it should set up add expense action object with default values", () => {
  // call add expense w/  no data
  // assert value of return object
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      notes: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
