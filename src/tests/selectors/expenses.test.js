import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Salsa",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "3",
    description: "Chips",
    note: "",
    amount: 395,
    createdAt: 2
  },
  {
    id: "3",
    description: "Guacamole",
    note: "",
    amount: 90,
    createdAt: 1
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses();
});
