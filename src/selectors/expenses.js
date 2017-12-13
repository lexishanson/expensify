import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = startDate
        ? startDate.isSameOrAfter(createdAtMoment, "day")
        : true;
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
