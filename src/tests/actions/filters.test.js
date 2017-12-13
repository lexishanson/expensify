import moment from "moment";

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("it should set up setTextFilter action object", () => {
  const text = "sample text";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("it should default text to empty string in setTextFilter action object if no text is passed in", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("it should set up sortByAmount action object", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("it should set up sortByDate action object", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("it should set up setStartDate action object", () => {
  const startDate = moment();
  const action = setStartDate(startDate);

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate
  });
});

test("it should set up setEndDate action object", () => {
  const endDate = moment();
  const action = setEndDate(endDate);

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate
  });
});
